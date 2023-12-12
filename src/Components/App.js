import React from "react";
import Buttons from "./Buttons";
import Qoute from "./Quote";
import "../styles/AppStyle.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    let res = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    if(res.ok){
      let data = await res.json();
      let dataArr = data.quotes;
      let randomIdx = Math.round(Math.random()*dataArr.length);
      console.log(dataArr[randomIdx]);
      this.setState(dataArr[randomIdx])
    }
  }
  render() {
    return (
      <div className="App" id="quote-box">
        <div>
          {/*https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
          qoutes json*/}
          <Qoute data={this.state} />
          <Buttons />
        </div>
        <footer>
          <p>
            by <a href="https://github.com/Blackdoll-Loki">Blackdoll-Loki</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
