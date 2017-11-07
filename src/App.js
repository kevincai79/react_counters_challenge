import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
        count1: 0,
        count2: 0,
        count3: 0,
      }


    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment(incrementValue, keyName) {
    this.setState({ [keyName]: this.state[keyName] + incrementValue })
  }

  decrement(decrementValue, keyName){
    this.setState({ [keyName]: this.state[keyName] - decrementValue })
  }

  calculateTotal() {
    const stuff = Object.values(this.state)
    console.log(stuff)
    const totalCount = stuff.reduce((count, sum) =>
      count + sum)
    return totalCount
  }

  render() {
    return (
      <div className="page-center-frame">
        <Counter
          amount={this.state.count1}
          increment={() => this.increment(1, "count1")}
          decrement={() => this.decrement(1, "count1")}
        />

        <Counter
          amount={this.state.count2}
          increment={() => this.increment(2, "count2")}
          decrement={() => this.decrement(2, "count2")}
        />

        <Counter
          amount={this.state.count3}
          increment={() => this.increment(3, "count3")}
          decrement={() => this.decrement(3, "count3")}
        />

        <span>
          { this.calculateTotal() }
        </span>

      </div>
    );
  }
}

export default App;
