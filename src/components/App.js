import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  list = ["ankur", "jyoti", "das"];
  render() {
    return (
      <>
        <ol key="relativeList">
          {this.list.map((members, index) => (
            <li key={"relativeListItem" + (index + 1)}>members</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
