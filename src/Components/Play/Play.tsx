import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import ReactHowler from "react-howler";
interface Song {
  songName: string;
  artist: string[];
  album: string;
  previewUrl: string;
}
export interface SongData {
  songs: Song[];
}
const SAVED_TRACKS_ENDPOINT =
  "https://api.spotify.com/v1/me/tracks?limit=30&offset=0";
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
    if (sessionStorage.getItem("accessToken")) {
      const token = sessionStorage.getItem("accessToken");
      sendSongListRequest(token, SAVED_TRACKS_ENDPOINT);
    }
    return () => {};
  }, []);

  const sendSongListRequest = (
    token: string | null,
    endpoint: string
  ): null | string => {
    axios
      .get(endpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const sl: Song[] = [];
        res.data.items.forEach((song: any) => {
          const newSong: Song = parseSong(song);
          sl.push(newSong);
        });
        setSongList(sl.concat(songList));
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
    return null;
  };
  const parseSong = (song: any): Song => {
    const newSong: Song = {
      songName: song.track.name,
      artist: handleArtist(song.track.artists),
      album: song.track.album.name,
      previewUrl: song.track.preview_url,
    };
    return newSong;
  };
  return (
    <React.Fragment>
      <MusicPlayer songs={shuffleArray(songList)} />
    </React.Fragment>
  );
};

const MusicPlayer = (data: SongData) => {
  const [audioState, setAudioState] = useState<boolean>(false);
  let [songIndex, setIndex] = useState<number>(0);
  if (data.songs.length == 0) {
    return <></>;
  } else {
    return (
      <React.Fragment>
        {console.log(data.songs[songIndex].previewUrl + ".mp3")}
        <ReactHowler
          src={data.songs[songIndex].previewUrl}
          format={["mp3"]}
          html5={true}
          playing={audioState}
          onEnd={() => setIndex((songIndex = songIndex + 1))}
        />
        <header>
          {songIndex + 1} / {data.songs.length}
        </header>
        <button onClick={() => setAudioState(!audioState)}>
          {audioState ? "Pause" : "Play"}
        </button>
        <button onClick={() => setIndex((songIndex = songIndex + 1))}>
          Skip
        </button>
      </React.Fragment>
    );
  }
};
export default Play;
