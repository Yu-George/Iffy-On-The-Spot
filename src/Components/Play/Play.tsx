import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Downshift from "downshift";
import ReactHowler from "react-howler";
import MusicNotes from "../MusicNotes/MusicNotes";
import "./Play.css";
import ResultCard from "../ResultCard/ResultCard";
import {
  FaPlay,
  FaPause,
  FaArrowRight,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeOff,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { loginUrl } from "../../API/spotify";
const ENDPOINTS = [
  "https://api.spotify.com/v1/me/tracks?limit=50&offset=0",
  "https://api.spotify.com/v1/me/player/recently-played?limit=50",
  "https://api.spotify.com/v1/me/top/tracks?limit=50",
];
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
    sessionStorage.clear();
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
          if (ind !== 2) song = song.track;
          if (song.preview_url) sl.push(parseSong(song));
        });
        setSongList(sl);
      })
      .catch((err) => {
        sessionStorage.clear();
        window.location.assign("/");
        console.log(err);
      });
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
  const [score, setScore] = useState<number>(0);
  const submitted = useRef<HTMLInputElement>(null);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [mute, setMute] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    e.returnValue = "";
    submitAnswer();
  };

  const submitAnswer = () => {
    if (answer.toLowerCase() === data.songs[songIndex].songName.toLowerCase()) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setAudioState(false);
    //  if (data.songs.length - 1 > songIndex) setIndex(songIndex + 1);
    openModal();
    console.log(songIndex, data.songs.length);
    setAnswer("");
    if (submitted.current !== null) submitted.current.blur();
  };

  const openModal = () => {
    setModal((prev) => !prev);
  };
  const handleAnswerChange = (text: string) => {
    let matches: string[] = [];
    if (text.length > 0) {
      matches = removeDupe(
        data.songs
          .filter((song) => {
            return song.songName.toLowerCase().includes(text);
          })
          .map((song) => {
            return song.songName;
          })
      );
    }
    setSuggestions(matches);
    setAnswer(text);
  };

  // fun remove dupe solution from https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
  function removeDupe(a: any[]) {
    return a.sort().filter(function (item, pos, ary) {
      return !pos || item != ary[pos - 1];
    });
  }
  const onSuggestHandler = (text: string) => {
    setAnswer(text);
    setSuggestions([]);
  };
  if (data.songs.length === 0) {
    return <></>;
  } else {
    return (
      <React.Fragment>
        <ResultCard
          showModal={showModal}
          setModal={setModal}
          songData={data.songs}
          isCorrect={isCorrect}
          index={songIndex}
          score={score}
          setIndex={setIndex}
        />
        <ReactHowler
          src={data.songs[songIndex].previewUrl}
          format={["mp3"]}
          html5={true}
          playing={audioState}
          onEnd={() => submitAnswer()}
          volume={volume}
          mute={mute}
        />
        <header className="progress">
          Score: {score} <br />
          {songIndex + 1}/{data.songs.length}
        </header>

        <form className="answer" onSubmit={handleSubmit}>
          <input
            id="answer"
            type="text"
            placeholder="Enter Your Answer"
            required
            value={answer}
            ref={submitted}
            onBlur={() => {
              setTimeout(() => {
                setSuggestions([]);
              }, 100);
            }}
            autoComplete="off"
            onChange={(e) => handleAnswerChange(e.target.value)}
          />
          <div className="autocomplete">
            {suggestions.slice(0, 5).map((sug, i) => {
              return (
                <div
                  className="suggestions"
                  onClick={() => onSuggestHandler(sug)}
                  key={i}
                >
                  {sug}
                </div>
              );
            })}
          </div>
          <button type="submit" id="submit" className="btn">
            <FaArrowRight />
          </button>
        </form>

        <div className="container">
          <button
            className="btn btn-ctrl"
            onClick={() => setAudioState(!audioState)}
          >
            {!audioState ? <FaPlay /> : <FaPause />}
          </button>
          <div className="volume-ctrl">
            {mute ? (
              <FaVolumeMute onClick={() => setMute(!mute)} />
            ) : volume !== 0 ? (
              <FaVolumeDown onClick={() => setMute(!mute)} />
            ) : (
              <FaVolumeOff />
            )}
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              className="slider"
              onChange={(e) => {
                setVolume(Number(e.target.value) / 100);
                setMute(false);
              }}
            ></input>
            <FaVolumeUp />
          </div>
        </div>
      </React.Fragment>
    );
  }
};
export default Play;
