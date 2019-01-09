import React from 'react'

const TodoItem = ({ todo, onClick, delTodoClick }) => (
  <li className="ui-state-default">
    <div className="checkbox">
      <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        <input type="checkbox" checked={todo.completed} onChange={onClick} /> {todo.text}
      </label>
      <button className="remove-item btn btn-default btn-xs pull-right" onClick={delTodoClick}><span className="glyphicon glyphicon-remove"></span></button>
    </div>
  </li>
)

export default TodoItem;