
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {GenreListSong} from "./components/GenreListSong";
import "./styles.css";

library.add(faPlus, faMusic);

export function GenreList(props) {
  return (
    <div className="genrelist">
      <div className="genrelist-title">
        <FontAwesomeIcon
          icon={["fa", "music"]}
          className="fa-music"
        />
        <span className="genrelist-title-text">G E N R E L I S T</span>
      </div>
      <div className="genrelist-contents">
        <div className="genrelist-items">
          {props.items.map((item, index) => {
            return (
              <GenreListSong 
                key={index} 
                item={item}
                selectedItems={props.selectedItems}
                onUpdateSelectedItems={props.onUpdateSelectedItems}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
