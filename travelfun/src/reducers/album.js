// import types from '../actions/types';
import albumData from '../actions/fakeData';

const initialState = {
  albumData,
  modal: false,
  cart: []
};

const album = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALBUM_API":
      return {
        ...state,
        albumData: action.albumData
      }
    case "TOGGLE_MODAL":
      return {
        ...state,
        modal: !state.modal
      }
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.product]
      }
    case "DELETE_CART_ITEM":
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, action.index),
          ...state.cart.slice(action.index + 1)
        ]
      }
    default:
      return state;
  }
};

export default album;