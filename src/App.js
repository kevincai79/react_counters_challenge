import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      counters: [{count:0, changeBy: 1}, {count:0, changeBy: 2}, {count:0, changeBy: 3} ]
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment(index) {
    const oldCounterArray = this.state.counters
    oldCounterArray[index].count += oldCounterArray[index].changeBy
    this.setState({ counters: oldCounterArray })
  }

  decrement(index) {
    const oldCounterArray = this.state.counters
    oldCounterArray[index].count -= oldCounterArray[index].changeBy
    this.setState({ counters: oldCounterArray })
  }

  total(){
    return this.state.count1 + this.state.count2 + this.state.count3
  }

  render() {
    return (
      <ul>
        {this.state.counters.map((counter, index) =>
          <li>
            <Counter counter={ counter } increment={() => this.increment(index)} decrement={() => this.decrement(index)}   />
          </li>
          )}
      </ul>
    );
  }
}

export default App

  // render() {
  //   return (
  //     <div className="page-center-frame">
  //       <Counter myProp={this.state.count1} myProp3={() => this.increment("count1",1)} myProp4={() => this.decrement("count1", 1)}/>
  //       <Counter myProp={this.state.count2} myProp3={() => this.increment("count2",2)} myProp4={() => this.decrement("count2", 2)}  />
  //       <Counter myProp={this.state.count3} myProp3={() => this.increment("count3",3)} myProp4={() => this.decrement("count3", 3)} />
  //       <h1>Total: {this.total()}</h1>
  //     </div>
  //   );
  // }
