import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const list = ["ankur", "jyoti", "das"];
    return (
      <>
        <ol key="relativeList">
          {list.map((members, index) => (
            <li key={"relativeListItem" + (index + 1)}>{members}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
