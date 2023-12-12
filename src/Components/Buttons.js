import React from "react";
import "../styles/ButtonsStyle.css";

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <div className="socials">
          <a
            href={`https://twitter.com/intent/tweet?text=${this.props.data.quote}-${this.props.data.author}`}
            id="tweet-quote"
            target={"_blank"}
            rel={"noreferrer"}
          ><div className="twitter"></div></a>
        </div>
        <button id="new-quote" className="next-qoute" onClick={this.props.callback}>
          Next
        </button>
      </div>
    );
  }
}

export default Buttons;
