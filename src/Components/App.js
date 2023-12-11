import React from "react";
import Buttons from "./Buttons";
import Qoute from "./Quote";
import "../styles/AppStyle.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Qoute />
          <Buttons />
        </div>
        <p>
          by <a href="https://github.com/Blackdoll-Loki">Blackdoll-Loki</a>
        </p>
      </div>
    );
  }
}

export default App;
