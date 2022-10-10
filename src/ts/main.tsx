import React, { Component, createElement } from "react";
import ReactDOM from "react-dom";

class MainDiv extends Component<{}, {}> {
  render() {
    return (
      <div>
        <p>Knights Codessssss</p>
        <button>Press me</button>
      </div>
    );
  }
}

const domContainer = document.querySelector("#reactDom");
ReactDOM.render(createElement(MainDiv), domContainer);
