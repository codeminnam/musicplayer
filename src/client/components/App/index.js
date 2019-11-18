import React from "react";
import { PlayList } from "../PlayList";
import { GenreList } from "../GenreList";
import { Content } from "../Content";
import { list, newSortedList } from "../../mockData/songList.js";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingBy: "hot",
      subGenreVisibility: false,
      genreList: [],
      selectedItems: [],
      playlistItems: [],
      newSortedItems: []
    };
  }

  componentDidMount = () => {
    const playlistItems = [...this.state.playlistItems];
    this.setState({
      playlistItems: list
    });

    fetch('https://reddit-music-graphql.herokuapp.com/', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json',
      },
      body: JSON.stringify({
        query: "{ reddits { title subGenreUrlList } }"
        })
    }).then(r => r.json())
    .then(data => {
      console.log(data);
      console.log('items:', data.data.reddits);
      const genre = data.data.reddits.map((reddit, index)=>{
        return {
          title: reddit.title,
          listItems: reddit.subGenreUrlList
        };
      });

      this.setState({
        genreList:genre
      });
    });
  }

  onUpdateSelectedItems = newItem => {
    const selectedItems = [...this.state.selectedItems];
    if (!selectedItems.includes(newItem)) {
      selectedItems.push(newItem);
      this.setState({
        selectedItems: selectedItems
      });
    }
  };

  onDeleteSelectedItems = newItem => {
    const selectedItems = [...this.state.selectedItems];
    this.setState({
      selectedItems: selectedItems.filter(item => {
        if (item === newItem) {
          return false;
        }
        return true;
      })
    });
  };

  onUpdateFilter = filterType => {
    console.log(filterType);
    if(filterType !== "hot" && filterType !== "new") return;
    this.setState({
      sortingBy: filterType
    });   
  }

  filterItems = () => {
    const playListItems = [...this.state.playlistItems];
    if (this.state.sortingBy === "new") {
      return this.applyNewSort();
    }
    if (this.state.sortingBy === "hot") {
      return this.applyHotSort(playListItems);
    }
    return playListItems;
  }

  applyNewSort = () => {
    return newSortedList;
  }

  applyHotSort = (playlistItems) => {
    return playlistItems;
  }

  onUpdateSubgenreList = () => {
    if (this.state.subGenreVisibility === true){
      this.setState({
        subGenreVisibility: false
      })
    }else{
      this.setState({
        subGenreVisibility: true
      })
    }
    return null;
  }

  render() {
    const items = this.filterItems();
    return (
      <div className="App">
        <GenreList
          genres={this.state.genreList}
          selectedItems={this.state.selectedItems}
          subGenreVisibility={this.state.subGenreVisibility}
          onUpdateSelectedItems={this.onUpdateSelectedItems}
          onUpdateSubgenreList={this.onUpdateSubgenreList}
        />
        <Content
          selectedItems={this.state.selectedItems}
          onDeleteSelectedItems={this.onDeleteSelectedItems}
        />
        <PlayList 
          playlistItems={items}
          onUpdateFilter={this.onUpdateFilter}
        />
      </div>
    );
  }
}

export default App;
