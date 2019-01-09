import types from '../actions/types';

const initialState = [{
  id: 1,
  text: '複習 React + Redux',
  completed: false
}, {
  id: 2,
  text: '準備履歷',
  completed: false
}, {
  id: 3,
  text: '準備前端面試題目',
  completed: false
}, {
  id: 4,
  text: '帶家人去吃飯',
  completed: false
}, {
  id: 5,
  text: '讀書會',
  completed: false
}];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.value,
          completed: false
        }
      ]
    case types.DELETE_TODO:
      return state.filter(item => item.id !== action.id)
    case types.TOGGLE_TODO:
      return state.map( todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
    case types.ALL_DONE:
      return state.map( todo => todo.completed ? todo : {...todo, completed: true})
    case types.SET_VISIBILITY_FILTER:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default todos;