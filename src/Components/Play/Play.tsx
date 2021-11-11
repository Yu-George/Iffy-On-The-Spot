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
const SAVED_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/tracks";
const Play: React.FC = () => {
  const [songList, setSongList] = useState<Song[]>([]);
  const handleArtist = (artists: any[]): string[] => {
    const aristList: string[] = [];
    artists.forEach((artist: any) => {
      aristList.push(artist.name);
    });
    return aristList;
  };
  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      const token = sessionStorage.getItem("accessToken");
      console.log(sessionStorage.getItem("accessToken"));
      sendSongListRequest(token);
    }
    return () => {};
  }, []);

  const sendSongListRequest = (token: string | null) => {
    axios
      .get(SAVED_TRACKS_ENDPOINT, {
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
        setSongList(sl);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <MusicPlayer songs={songList} />
    </React.Fragment>
  );
};

const MusicPlayer = (data: SongData) => {
  const [audioState, setAudioState] = useState<boolean>(false);
  if (data.songs.length == 0) {
    return <></>;
  } else {
    return (
      <React.Fragment>
        {console.log(data.songs[0].previewUrl + ".mp3")}
        <ReactHowler
          src={data.songs[0].previewUrl}
          format={["mp3"]}
          html5={true}
          playing={audioState}
        />
        <button onClick={() => setAudioState(!audioState)}>
          {audioState ? "Pause" : "Play"}
        </button>
      </React.Fragment>
    );
  }
};
export default Play;
