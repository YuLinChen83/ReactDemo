import types from './types';

const addTodo = value => ({
  type: types.ADD_TODO,
  value: value
});

const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id
});

const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
});

const allDone = () => ({
  type: types.ALL_DONE,
});

const fetchTodolistJson = (json) => ({
  type: types.FETCH_TODOLIST_JSON,
  data: json
});

const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
})


export default {
  addTodo,
  deleteTodo,
  toggleTodo,
  allDone,
  fetchTodolistJson,
  setVisibilityFilter
}