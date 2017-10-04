import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+</button>
        <div className="count">{this.state.count}</div>
      </div>
    );
  }
}