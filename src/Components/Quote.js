import React from "react";

class Quote extends React.Component {
  render() {
    console.log(this.props.data.quote)
    return (
      <div className="Qoute">
        <blockquote id="text">{this.props.data.quote}</blockquote>
        <p id="author">-{this.props.data.author}</p>
      </div>
    );
  }
}

export default Quote;
