import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './components/TodoListContainer'

class App extends Component {
  render() {
    return (
      <TodoListContainer />
    );
  }
}

export default App;