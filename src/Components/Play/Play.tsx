import React, {
  ReactComponentElement,
  useEffect,
  useRef,
  useState,
} from "react";
import axios, { AxiosResponse } from "axios";
import ReactHowler from "react-howler";
import Howler from "howler";
import MusicNotes from "../MusicNotes/MusicNotes";
import "./Play.css";
import ResultCard from "../ResultCard/ResultCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export interface Song {
  songName: string;
  artist: string[];
  album: string;
  previewUrl: string;
  albumImgUrl: string;
}
export interface SongData {
  songs: Song[];
}
interface Mode {
  ind: number;
}
const ENDPOINTS = [
  "https://api.spotify.com/v1/me/tracks?limit=50&offset=0",
  "https://api.spotify.com/v1/me/player/recently-played?limit=50",
  "https://api.spotify.com/v1/me/top/tracks?limit=50",
];
const Play = () => {
  const [songList, setSongList] = useState<Song[]>([]);
  const location = useLocation();
  const mode: Mode = location.state;
  const handleArtist = (artists: any[]): string[] => {
    const aristList: string[] = [];
    artists.forEach((artist: any) => {
      aristList.push(artist.name);
    });
    return aristList;
  };

  function shuffleArray(array: Song[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  useEffect(() => {
    console.log(mode);
    window.addEventListener("beforeunload", alertUser);
    if (sessionStorage.getItem("accessToken")) {
      const token = sessionStorage.getItem("accessToken");
      sendSongListRequest(token, mode.ind);
    } else {
      window.location.assign("/");
    }
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e: any) => {
    e.preventDefault();
    e.returnValue = "";
    window.location.assign("/");
  };
  const sendSongListRequest = (token: string | null, ind: number) => {
    axios
      .get(ENDPOINTS[ind], {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const sl: Song[] = [];
        res.data.items.forEach((song: any) => {
          if (ind != 2) song = song.track;
          if (song.preview_url) sl.push(parseSong(song));
        });
        setSongList(sl);
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
    return null;
  };
  const parseSong = (song: any): Song => {
    let newSong: Song;
    if (song.track) {
      newSong = {
        songName: song.name,
        artist: handleArtist(song.artists),
        album: song.album.name,
        previewUrl: song.preview_url,
        albumImgUrl: song.album.images[0].url,
      };
    } else {
      newSong = {
        songName: song.name,
        artist: handleArtist(song.artists),
        album: song.album.name,
        previewUrl: song.preview_url,
        albumImgUrl: song.album.images[0].url,
      };
    }
    return newSong;
  };
  return (
    <React.Fragment>
      <MusicNotes />
      <MusicPlayer songs={shuffleArray(songList)} />
    </React.Fragment>
  );
};

const MusicPlayer = (data: SongData) => {
  const [audioState, setAudioState] = useState<boolean>(false);
  const [songIndex, setIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [volume, setVolume] = useState<number>(0.5);
  const [showModal, setModal] = useState<boolean>(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    e.returnValue = "";
    alert(answer);
  };

  const openModal = () => {
    setModal((prev) => !prev);
  };
  const handleAnswerChange = (e: any) => {
    setAnswer(e.target.value);
  };
  if (data.songs.length === 0) {
    return <></>;
  } else {
    return (
      <React.Fragment>
        <ResultCard
          showModal={showModal}
          setModal={setModal}
          songData={data.songs[songIndex - 1]}
        />
        <ReactHowler
          src={data.songs[songIndex].previewUrl}
          format={["mp3"]}
          html5={true}
          playing={audioState}
          onEnd={() => {
            setIndex(songIndex + 1);
            setAudioState(false);
          }}
          volume={volume}
        />
        <header className="progress">
          {songIndex + 1} / {data.songs.length}
        </header>
        <form className="answer" onSubmit={handleSubmit}>
          <input
            id="answer"
            type="text"
            placeholder="Enter Your Answer"
            required
            onChange={handleAnswerChange}
          ></input>
          <br className="mobile-break" />
          <input type="submit" id="submit" className="btn"></input>
        </form>
        <div className="container">
          <button
            className="btn btn-ctrl"
            onClick={() => setAudioState(!audioState)}
          >
            {!audioState ? <FaPlay /> : <FaPause />}
          </button>
          <button
            className="btn skip btn-ctrl"
            onClick={() => {
              setIndex(songIndex + 1);
              openModal();
            }}
          >
            Skip
          </button>
        </div>
      </React.Fragment>
    );
  }
};
export default Play;
