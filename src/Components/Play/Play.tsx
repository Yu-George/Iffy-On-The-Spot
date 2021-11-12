import React, { ReactComponentElement, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import ReactHowler from "react-howler";
import MusicNotes from "../MusicNotes/MusicNotes";
import "./Play.css";
interface Song {
  songName: string;
  artist: string[];
  album: string;
  previewUrl: string;
}
export interface SongData {
  songs: Song[];
}

const ENDPOINTS = [
  "https://api.spotify.com/v1/me/tracks?limit=50&offset=0",
  "https://api.spotify.com/v1/me/player/recently-played?limit=50",
  "https://api.spotify.com/v1/me/top/tracks?limit=50",
];
const Play: React.FC = () => {
  const [songList, setSongList] = useState<Song[]>([]);
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
    window.addEventListener("beforeunload", alertUser);
    if (
      sessionStorage.getItem("accessToken") ||
      sessionStorage.getItem("mode")
    ) {
      const token = sessionStorage.getItem("accessToken");
      const endIndex = Number(sessionStorage.getItem("mode"));
      sendSongListRequest(token, ENDPOINTS[endIndex]);
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
  const sendSongListRequest = (token: string | null, endpoint: string) => {
    axios
      .get(endpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const sl: Song[] = [];
        console.log(res.data.items[0]);
        res.data.items.forEach((song: any) => {
          sl.push(parseSong(song));
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
        songName: song.track.name,
        artist: handleArtist(song.track.artists),
        album: song.track.album.name,
        previewUrl: song.track.preview_url,
      };
    } else {
      newSong = {
        songName: song.name,
        artist: handleArtist(song.artists),
        album: song.album.name,
        previewUrl: song.preview_url,
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
  let [songIndex, setIndex] = useState<number>(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    e.returnValue = "";
    alert("Submit");
  };
  if (data.songs.length === 0) {
    return <></>;
  } else {
    return (
      <React.Fragment>
        <ReactHowler
          src={data.songs[songIndex].previewUrl}
          format={["mp3"]}
          html5={true}
          playing={audioState}
          onEnd={() => {
            setIndex((songIndex = songIndex + 1));
            setAudioState(false);
          }}
        />
        <header className="progress">
          {songIndex + 1} / {data.songs.length}
        </header>
        <form className="answer" onSubmit={handleSubmit}>
          <input
            id="answer"
            type="text"
            placeholder="Enter Your Answer"
            minLength={3}
          ></input>
          <input type="submit" id="submit" className="btn"></input>
        </form>
        <div className="container">
          <button className="btn" onClick={() => setAudioState(!audioState)}>
            {audioState ? "Pause" : "Play"}
          </button>
          <button
            className="btn skip"
            onClick={() => setIndex((songIndex = songIndex + 1))}
          >
            Skip
          </button>
        </div>
      </React.Fragment>
    );
  }
};
export default Play;
