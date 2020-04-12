import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHeart);

export function PlayListSong(props){
    const songInfo = props.songInfo;
    return(
        <div className="playlist-song" onClick={() => props.onUpdateCurrentSong(songInfo.url)}>
            <div className="playlist-img">
                <img
                    src={songInfo.imageUrl}
                    alt=""
                    className="playlist-img-thumbnail"
                  />
            </div>
            <div className="playlist-song-content">
                <div className="playlist-song-title">
                    <p>{songInfo.name}</p>  
                </div>
                <span className="playlist-genre">{props.genreName}</span>
            </div> 
        </div>
    );
}