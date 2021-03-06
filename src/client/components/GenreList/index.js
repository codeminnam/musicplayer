
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {GenreListItem} from "./components/GenreListItem";
import {ListTitle} from "../ListTitle";
import "./styles.css";

library.add(faPlus, faMusic, faSpinner);

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
          
          {props.genres && props.genres.length>0 ?
          
          props.genres.map((genre, index) => {
            return (
              <GenreListItem
                key={index} 
                title={genre.title}
                listItems={genre.listItems}
                selectedItems={props.selectedItems}
                onUpdateSelectedItems={props.onUpdateSelectedItems}
                onDeleteSelectedItems={props.onDeleteSelectedItems}
              />
            )})
          : 
            <FontAwesomeIcon
              icon={["fa", "spinner"]} className="fa-spin genrelist-spinner" rotation={180} />
          
            }
        </div>
      </div>
    </div>
  );
}
