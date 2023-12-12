import React from "react";
import "../styles/ButtonsStyle.css";

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <div className="socials">
          <a
            href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            className="twitter"
            target={"_blank"}
          ></a>
          <a
            a
            href="https://www.facebook.com/sharer/sharer.php?u=example.org"
            target="_blank"
            className="facebook"
          ></a>
        </div>
        <button id="new-quote" className="next-qoute">
          Next
        </button>
      </div>
    );
  }
}

export default Buttons;
