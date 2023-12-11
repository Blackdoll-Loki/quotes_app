import React from "react";
import "../styles/ButtonsStyle.css";

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <div className="socials">
          <button>twit</button>
          <button>fb</button>
        </div>
        <button>Next</button>
      </div>
    );
  }
}

export default Buttons;
