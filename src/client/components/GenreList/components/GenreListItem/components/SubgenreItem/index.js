import React from "react";
import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(faPlus);

export function SubgenreItem(props){
    return (
        <div className='subgenre-item'>
            <span className="subgenre-title">
                {props.item}
            </span>
            <span className="subgenre-icon">
                <FontAwesomeIcon
                    icon={["fa", "plus"]}
                    className="fa-plus"
                    onClick={() => props.onUpdateSelectedItems(props.item)}
                />
            </span>            
        </div>
    );
}