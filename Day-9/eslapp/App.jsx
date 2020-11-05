import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      appState: 1
    };
    this.increaseNumber = this.increaseNumber.bind(this);
    this.decreaseAppState = this.decreaseAppState.bind(this);
  }

  increaseNumber() {
    const { appState } = this.state;

    this.setState({
      appState: appState + 1
    });
  }

  decreaseAppState() {
    const { appState } = this.state;

    this.setState({
      appState: appState - 1
    });
  }

  render() {
    var temp="hello";
    const { appState } = this.state;

    return (
      <div className='app'>
        <h1>React assignment #1</h1>
        <p>Current number: {appState}</p>
        <button onClick={this.increaseNumber}>Increase number</button>
       
      </div>
    );
  }
}

export default App;