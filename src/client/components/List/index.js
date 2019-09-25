import "./styles.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faShareAlt);
library.add(faPlus);

export function List(props) {
  return (
    <div className="bar">
      <div className="list-title">
        {props.title}
        <FontAwesomeIcon icon={["fa", "share-alt"]} className="fa-share-alt" />
      </div>
      <div className="list-contents">
        <div className="list-items">
          {props.items.map((item, index) => {
            return (
              <div className="list-item" key={index}>
                {item}
                {!props.selectedItems.includes(item) && (
                  <FontAwesomeIcon
                    icon={["fa", "plus"]}
                    className="fa-plus"
                    onClick={() => props.onSelectedItems(item)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
