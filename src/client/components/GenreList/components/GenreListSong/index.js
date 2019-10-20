import React from "react";
import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(faPlus);

export function GenreListSong(props){
    const item= props.item;
    return(
        <div className="genrelist-item">
            {item}
            {!props.selectedItems.includes(item) && (
                <FontAwesomeIcon
                    icon={["fa", "plus"]}
                    className="fa-plus"
                    onClick={() => props.onUpdateSelectedItems(item)}
                />
            )}
        </div>
    );
}