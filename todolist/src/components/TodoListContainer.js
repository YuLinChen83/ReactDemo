import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';
import TodoInput from './TodoInput'
import VisibleTodoList from './VisibleTodoList'

const TodoList = ({ todos, onTodoClick, addTodo, deleteTodo, allDone }) => (
  <div className="container">
    <div className="todolist">
      <h1>React Redux TodoList</h1>
      <TodoInput addTodo={addTodo} allDone={allDone} />
      <hr />
      <VisibleTodoList todos={todos} onTodoClick={onTodoClick} deleteTodo={deleteTodo} />
    </div>
  </div>
)

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }


const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: id => Actions.toggleTodo(id),
  addTodo: value => Actions.addTodo(value),
  deleteTodo: id => Actions.deleteTodo(id),
  allDone: () => Actions.allDone(),
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default TodoListContainer;


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}