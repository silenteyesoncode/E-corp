import CartActionTypes from './cart.types';


export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
// Add Item To cart
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
// for cart items updation
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});
// clear that whole item
export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});


 