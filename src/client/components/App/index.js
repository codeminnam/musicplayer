import React from "react";
import { LeftBar } from "../LeftBar";
import { Content } from "../Content";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["kpop", "soundtracks", "jpop"],
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
        <LeftBar
          items={this.state.items}
          selectedItems={this.state.selectedItems}
          onUpdateSelectedItems={this.onUpdateSelectedItems}
        />
        <Content
          selectedItems={this.state.selectedItems}
          onDeleteSelectedItems={this.onDeleteSelectedItems}
        />
      </div>
    );
  }
}

export default App;
