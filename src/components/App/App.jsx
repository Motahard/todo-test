import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';

import './app.css'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}

export default App;
