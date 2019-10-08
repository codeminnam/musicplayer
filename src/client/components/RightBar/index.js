import React from "react";
import { list } from "../../mockData/songList.js";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHeadphonesAlt, faHeart);

export function RightBar(props) {
  return (
    <div className="right-bar">
      <div className="playlist">
        <div className="playlist-title">
          <FontAwesomeIcon
            icon={["fa", "headphones-alt"]}
            className="fa-headphones-alt"
          />
          <span className="playlist-title-text">P L A Y L I S T</span>
        </div>
        <div className="playlist-filter">
          <div className="playlist-filter-hot">H O T</div>
          <div className="playlist-filter-new">N E W</div>
        </div>

        <div className="playlist-content">
          {list.map((item, index) => {
            return (
              <div key={index} className="playlist-song">
                <div className="playlist-img">
                  <img
                    src={item.image}
                    alt=""
                    className="playlist-img-thumbnail"
                  />
                </div>
                <div className="playlist-song-content">
                  <div className="playlist-song-title">
                    <span>{item.title}</span>  
                  </div>
                  <div className="playlist-song-detail">
                    {item.author} •{item.date} •{item.genre}
                  </div>
                  <div className="playlist-song-like">
                      <FontAwesomeIcon
                        icon={["fa", "heart"]}
                        className="fa-heart"
                      />
                      <span>{item.like}</span>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
