import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter amount={1}/>
        <Counter amount={2}/>
        <Counter amount={3}/>
      </div>
    );
  }
}

export default App;
