const fetchAlbumApi = albumData => ({
  type: "FETCH_ALBUM_API",
  albumData
})

const toggleShoppingCartModal = () => ({
  type: "TOGGLE_MODAL"
})

const addToCart = product => ({
  type: "ADD_TO_CART",
  product
})

const deleteCartItem = index => ({
  type: "DELETE_CART_ITEM",
  index
})

export default {
  fetchAlbumApi,
  toggleShoppingCartModal,
  addToCart,
  deleteCartItem
}