import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHeadphonesAlt);

export function PlayListTitle(props){
return(
    <div className="playlist-title">
        <FontAwesomeIcon
            icon={["fa", "headphones-alt"]}
            className="fa-headphones-alt"
        />
        <span className="playlist-title-text">P L A Y L I S T</span>
    </div>
);
}