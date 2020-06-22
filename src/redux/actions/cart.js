import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_CART_ITEM,
  REMOVE_ITEM,
} from "./actionTypes";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearCartItem = (item) => ({
  type: CLEAR_CART_ITEM,
  payload: item,
});
