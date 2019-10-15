import React from "react";
import { GenreList } from "../GenreList";
import { RightBar } from "../RightBar";
import { Content } from "../Content";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["kpop", "soundtracks", "spanish"],
      selectedItems: []
    };
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

  render() {
    return (
      <div className="App">
        <GenreList
          items={this.state.items}
          selectedItems={this.state.selectedItems}
          onUpdateSelectedItems={this.onUpdateSelectedItems}
        />
        <Content
          selectedItems={this.state.selectedItems}
          onDeleteSelectedItems={this.onDeleteSelectedItems}
        />
        <RightBar />
      </div>
    );
  }
}

export default App;
