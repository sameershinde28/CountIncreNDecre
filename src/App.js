import "./styles.css";
import React from "react";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 100
    };
  }
  render() {
    return (
      <div className="App">
        <h1>class component {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          update count
        </button>
        <br />
        <br />
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          decrease count
        </button>
      </div>
    );
  }
}
