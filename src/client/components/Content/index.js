import React from "react";
import "./styles.css";
import { Chip } from "../Chip";

export function Content(props) {
  return (
    <div className="content">
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
