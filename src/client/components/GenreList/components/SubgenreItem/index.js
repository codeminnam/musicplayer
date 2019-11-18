import React from "react";
import "./styles.css";

export function SubgenreItem(props){
    return (
        <div className={'subgenre-item ${props.subGenreVisibility ? "" : "hidden"}'}>
            {props.item}
        </div>
    );
}