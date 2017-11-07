import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      // {counters: [
      //   {count: 0, multiplier: 1},
      //   {count: 0, multiplier: 2},
      //   {count: 0, multiplier: 3}
      //   ]},
      counters: []
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.total = this.total.bind(this)
    this.addCounter = this.addCounter.bind(this)
    this.removeCounter = this.removeCounter.bind(this)
  }

  componentDidMount() {
    fetch('http://numbers-api.herokuapp.com/')
      .then(response => response.json())
      .then(data =>
        this.setState({ counters: data })
      );
  }

  increment(index) {
    const counters = this.state.counters
    counters[index].value += 1
    this.setState({counters})
  }

  decrement(index) {
    const counters = this.state.counters
    counters[index].value -= 1
    this.setState({counters})
  }

  total() {
    return this.state.counters.reduce((sum, counter) => sum + counter.value, 0);
  }

  addCounter() {
    const counters = this.state.counters
    counters.push({value: 0})
    this.setState({ counters })
  }

  removeCounter() {
    const counters = this.state.counters
    counters.splice(-1, 1)
    this.setState({ counters })
  }

  render() {
    return (

      <div className="page-center-frame">
        {(this.state.counters).map((counter, index) =>
        <Counter
        increment={ () => this.increment(index)}
        decrement={ () => this.decrement(index)}
        value={counter.value}/>
          )}

        <div className='total'>
          <span>Total: {this.total()}</span>
        </div>
        <button onClick={this.addCounter}>+ counter</button>
        <button onClick={this.removeCounter}>- counter</button>
      </div>
    );
  }
}

export default App;
