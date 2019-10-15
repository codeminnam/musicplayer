import React from "react";
import { LeftBar } from "../LeftBar";
import { PlayList } from "../PlayList";
import { Content } from "../Content";
import { list } from "../../mockData/songList.js";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["kpop", "soundtracks", "spanish"],
      selectedItems: [],
      playlistItems: []
    };
  }

  componentDidMount = () => {
    const playlistItems = [...this.state.playlistItems];
    this.setState({
      playlistItems: list
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

  onUpdateHotFilter = newItem => {
    const playlistItems = [...this.state.playlistItems];
    console.log("hot");
  }

  onUpdateNewFilter = newItem => {
    const playlistItems = [...this.state.playlistItems];
    console.log("new");
  }

  render() {
    return (
      <div className="App">
        <LeftBar
          items={this.state.items}
          selectedItems={this.state.selectedItems}
          onUpdateSelectedItems={this.onUpdateSelectedItems}
        />
        <Content
          selectedItems={this.state.selectedItems}
          onDeleteSelectedItems={this.onDeleteSelectedItems}
        />
        <PlayList 
          playlistItems={this.state.playlistItems}
          onUpdateHotFilter={this.onUpdateHotFilter}
          onUpdateNewFilter={this.onUpdateNewFilter}
        />
      </div>
    );
  }
}

export default App;
