import React from "react";
import "./styles.css";

import { PlayListSong } from "./components/PlayListSong";
import { PlayListTitle } from "../PlayListTitle";



export function PlayList(props) {
  return (
      <div className="playlist">
        <PlayListTitle />
        <div className="playlist-filter">
          <div className="playlist-filter-hot" onClick={()=>props.onUpdateFilter("hot")}>H O T</div>
          <div className="playlist-filter-new" onClick={()=>props.onUpdateFilter("new")}>N E W</div>
        </div>

        <div className="playlist-content">
          {props.playlistItems.map((song, index) => {
            return (
              <PlayListSong key={`${song.title}${index}`} information={song}/>
            );
          })}
        </div>
      </div>
  );
}
