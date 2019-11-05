import React from "react";
import "./styles.css";

export function ListTitle(props){
    return(
        <div className="list-title">
            {props.icon}
            <span className={buildCss(props)}>{props.title}</span>
        </div>
    );
}

function buildCss(props) {
    const cssClasses = ['list-title-text'];
    if (props.textColor === 'black') {
        cssClasses.push('list-title--black');
    } else {
        cssClasses.push('list-title--white');
    }
    console.log(cssClasses.join().replace(","," "));
    return cssClasses.join().replace(","," ");
}