export const ADD_TO_STORE = 'ADD_TO_STORE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const AT_CART = 'AT_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREASE_QTY = 'DECREASE_QTY';
export const INCREASE_QTY = 'INCREASE_QTY';
export const ADD_FILTER_IN_STORE = 'ADD_FILTER_IN_STORE';
export const ADD_FILTER_BY_TEXT = 'ADD_FILTER_BY_TEXT';
export function addToStore(data) {
  return {
    type: ADD_TO_STORE,
    data,
  };
}

export function addedIncart(item) {
  return {
    type: ADD_TO_CART,
    item,
  };
}

export function atCart(cart) {
  return {
    type: AT_CART,
    cart,
  };
}

export function removeFromCart(newArr) {
  return {
    type: REMOVE_FROM_CART,
    newArr,
  };
}

export function decreaseQty(i) {
  return {
    type: DECREASE_QTY,
    i,
  };
}

export function increaseQty(i) {
  return {
    type: INCREASE_QTY,
    i,
  };
}

export function addFilterInStore(filterArr) {
  return {
    type: ADD_FILTER_IN_STORE,
    filterArr,
  };
}

export function addFilterInStoreByText(searchText) {
  return {
    type: ADD_FILTER_BY_TEXT,
    searchText,
  };
}
