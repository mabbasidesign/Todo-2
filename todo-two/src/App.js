import React, { Component } from 'react';
import Todos from './todos';

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario cart'},
      {id: 3, content: 'buy some milk'},
      {id: 4, content: 'play mario cart'}
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
