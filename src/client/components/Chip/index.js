import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTimes);

export function Chip(props) {
  return (
    <div className="chip">
      <span className="chip-span">{props.item}</span>
      <FontAwesomeIcon
        icon={["fa", "times"]}
        className="fa-times"
        onClick={() => props.onDelete(props.item)}
      />
    </div>
  );
}
