import React, { Component } from 'react';
import Todos from './todos';
import AddTotdo from './addTodo';

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario cart'},
      {id: 3, content: 'buy some milk'},
      {id: 4, content: 'play mario cart'}
    ]
  }

  handleDelete = (id) => {
    let todos = this.state.todos.filter(t => t.id !== id);
    this.setState({ todos });
  }

  handleAdd = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} onDelete={this.handleDelete} />
        <AddTotdo addTodo={this.handleAdd} />
      </div>
    );
  }
}

export default App;
