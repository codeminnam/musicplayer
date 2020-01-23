import React from "react";
import "./styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {SubgenreItem} from "./components/SubgenreItem"
library.add(faPlus);
library.add(faCaretDown);
library.add(faCaretUp);

export class GenreListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            subGenreVisibility: false
        };
    }

    onClickButton = () => {
        this.setState({
            subGenreVisibility: !this.state.subGenreVisibility
        });
    }

    render(){
        const { title, listItems } = this.props;

        return(
            <div className="genrelist-item">
                <div className="genrelist-genre">
                    <span className="genrelist-genre-title">{title}</span>
                    {!this.state.subGenreVisibility ? (
                        <span className="genrelist-genre-icon">
                            <FontAwesomeIcon
                                icon={["fa", "caret-down"]}
                                className="fa-caret-down"
                                onClick={this.onClickButton}
                            />
                        </span>
                    ) : (<span className="genrelist-genre-icon">
                    <FontAwesomeIcon
                        icon={["fa", "caret-up"]}
                        className="fa-caret-up"
                        onClick={this.onClickButton}
                    />
                </span>)}
                </div>
                <div className = {`subgenrelist animation-${this.state.subGenreVisibility? "growth" : "origin"}`}>
                    {listItems && listItems.length !== 0 && listItems.map((item, index)=>{
                        const newItem = item.replace("/r/", "");
                        const capItem = newItem.charAt(0).toUpperCase()+newItem.slice(1);
                        return (
                            <SubgenreItem 
                                key={item}
                                item={capItem}
                                subGenreVisibility={this.state.subGenreVisibility}
                                selectedItems={this.props.selectedItems}
                                onUpdateSelectedItems={this.props.onUpdateSelectedItems}
                                onDeleteSelectedItems={this.props.onDeleteSelectedItems}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}