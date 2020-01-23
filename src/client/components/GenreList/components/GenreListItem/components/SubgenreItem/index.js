import React from "react";
import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(faPlus);
library.add(faTimes);

export function SubgenreItem(props){
    return (
        <div className={`subgenre-item visibility-${props.subGenreVisibility? "visible" : "none"}`}>
            <span className="subgenre-title">
                {props.item}
            </span>
            <span className="subgenre-icon">
                { props.selectedItems.includes(props.item) ?
                    (<FontAwesomeIcon
                        icon={["fa", "times"]}
                        className="fa-times-sub"
                        onClick={() => props.onDeleteSelectedItems(props.item)}
                    />)
                    :
                    (<FontAwesomeIcon
                        icon={["fa", "plus"]}
                        className="fa-plus-sub"
                        onClick={() => props.onUpdateSelectedItems(props.item)}
                    />)
                }
            </span>            
        </div>
    );
}