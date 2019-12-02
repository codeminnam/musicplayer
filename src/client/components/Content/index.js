import React from "react";
import "./styles.css";
import { Chip } from "../Chip";
import YouTube from "react-youtube";

export function Content(props) {
  return (
    <div className="content">
      <div className="player-title">
        <p>p l a y e r</p>
      </div>
      {
        props.playlistItems && props.playlistItems.length !==0 &&
        <YouTube 
          className="main-player"
          videoId="pjDqdbjpjO4"
        />
      }
      
      {props.selectedItems.map((item, index) => {
        return (
            <Chip
              key={index}
              item={item}
              className="playlist-item"
              onDelete={props.onDeleteSelectedItems}
            />
        );
      })}

      {
        props.selectedItems && props.selectedItems !== 0 &&
        <button onClick={props.onUpdatePlaylistItems}>Make a playlist</button>
      }
    </div>
  );
}
