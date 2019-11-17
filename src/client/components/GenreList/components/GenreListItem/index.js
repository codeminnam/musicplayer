import React from "react";
import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(faPlus);
library.add(faCaretDown);

export function GenreListItem(props){
    const { title, listItems } = props;
    return(
        <div className="genrelist-item">
            <div className="genrelist-genre">
                <span className="genrelist-genre-title">{title}</span>
                {!props.selectedItems.includes(title) && (
                    <span class="genrelist-genre-icon">
                        <FontAwesomeIcon
                        icon={["fa", "caret-down"]}
                        className="fa-caret-down"
                        onClick={() => props.onUpdateSelectedItems(title)}
                        />
                        <FontAwesomeIcon
                            icon={["fa", "plus"]}
                            className="fa-plus"
                            onClick={() => props.onUpdateSelectedItems(title)}
                        />
                    </span>
                )}
            </div>
            <div className="subgenrelist">
                {listItems && listItems.length !== 0 && listItems.map((item, index)=>{
                    return (<div key={item} class="subgenre-item">{item}</div>);
                })}
            </div>
        </div>
    );
}