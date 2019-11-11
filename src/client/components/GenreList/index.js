
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {GenreListSong} from "./components/GenreListSong";
import {ListTitle} from "../ListTitle";
import "./styles.css";

library.add(faPlus, faMusic);

export function GenreList(props) {
  const musicIcon = (<FontAwesomeIcon
    icon={["fa", "music"]}
    className="fa-music"
  />);

  return (
    <div className="genrelist">
      <ListTitle title="G E N R E L I S T" icon={musicIcon} textColor="white"/>
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
