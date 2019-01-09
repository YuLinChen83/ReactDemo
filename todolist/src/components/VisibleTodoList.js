import React from 'react';
import TodoItem from './TodoItem'

const VisibleTodoList = ({ todos, onTodoClick, deleteTodo }) => {
  const sortedTodos = todos.filter(todo => !todo.completed).concat(todos.filter(todo => todo.completed));
  return (
  <ul id="sortable" className="list-unstyled">
    {
      sortedTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onClick={() => onTodoClick(todo.id)} delTodoClick={() => deleteTodo(todo.id)}/>
      ))
    }
  </ul>
)}

export default VisibleTodoList;