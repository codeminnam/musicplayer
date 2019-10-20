import React from "react";
import "./styles.css";
import { Chip } from "../Chip";
import YouTube from "react-youtube";

export function Content(props) {
  return (
    <div className="content">
      <YouTube 
        className="main-player"
        videoId="pjDqdbjpjO4"
      />
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
    </div>
  );
}
