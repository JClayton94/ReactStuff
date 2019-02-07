import React, { Component } from 'react';


class Newcomponent extends Component {
  render() {
    return (
        <div>
            <h1>{ this.props.headerProp }</h1>
        </div>
    );
  }
static defaultProps = {
    headerProp: "Hello!",
    exampleProp2: {
        stuff: 1
        }
    }
}



export default Newcomponent;