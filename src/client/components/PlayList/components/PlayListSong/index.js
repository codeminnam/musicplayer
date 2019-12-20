import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHeart);

export function PlayListSong(props){
    const info = props.info;
    return(
        <div className="playlist-song" onClick={() => props.onUpdateCurrentSong(info.url)}>
            <div className="playlist-img">
                <img
                    src={info.imageUrl}
                    alt=""
                    className="playlist-img-thumbnail"
                  />
            </div>
            <div className="playlist-song-content">
                <div className="playlist-song-title">
                    <span>{info.name}</span>  
                </div>
                {/* <div className="playlist-song-detail">
                    {info.author} •{info.date} •{info.genre}
                </div>
                <div className="playlist-song-like">
                      <FontAwesomeIcon
                        icon={["fa", "heart"]}
                        className="fa-heart"
                      />
                      <span>{info.like}</span>
                </div> */}
            </div> 
        </div>
    );
}