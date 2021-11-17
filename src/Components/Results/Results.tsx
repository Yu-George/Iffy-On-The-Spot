import { useLocation } from "react-router-dom";
import React from "react";
import { Song } from "../Play/Play";
import MusicNotes from "../MusicNotes/MusicNotes";

interface ResultProps {
  score: number;
  songs: Song[];
}
const Results = () => {
  const location = useLocation();
  const props: any = location.state;
  return (
    <React.Fragment>
      <MusicNotes></MusicNotes>
      <div>{props.score}</div>
    </React.Fragment>
  );
};

export default Results;
