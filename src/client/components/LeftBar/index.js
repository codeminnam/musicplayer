import React from "react";
import "./styles.css";
import { List } from "../List";

export function LeftBar(props) {
  return (
    <div className="left-bar">
      <List
        title={"PlayList"}
        items={props.items}
        selectedItems={props.selectedItems}
        onSelectedItems={props.onUpdateSelectedItems}
      />
    </div>
  );
}
