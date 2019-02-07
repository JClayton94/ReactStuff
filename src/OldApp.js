import React, { Component } from 'react';
import Newcomponent from './NewComponent.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: "Header from props",
      content: "Content from props"
    }
  }

  render() {
    return (
      <div>
        <Newcomponent />
        <button onClick = {this.clickMeFunction.bind(this)}>Click Me</button>
        {this.state.header}

      </div>
    );
  }

  clickMeFunction = () => this.setState({ 

    header: 'New Header'

  })
}
export default App;
