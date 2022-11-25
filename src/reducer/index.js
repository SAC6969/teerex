import { combineReducers } from 'redux';
import {
  ADD_TO_STORE,
  ADD_TO_CART,
  AT_CART,
  REMOVE_FROM_CART,
  DECREASE_QTY,
  INCREASE_QTY,
  ADD_FILTER_IN_STORE,
  ADD_FILTER_BY_TEXT,
} from '../action';

const initialStoreState = {
  stores: [],
  filterStore: [],
  searchStore: '',
};

export function storeItem(state = initialStoreState, action) {
  switch (action.type) {
    case ADD_TO_STORE:
      return {
        ...state,
        stores: action.data,
      };
    case ADD_FILTER_IN_STORE:
      const idx = state.filterStore.findIndex((i) => i === action.filterArr);
      if (idx === -1) {
        state.filterStore.push(action.filterArr);
      } else {
        state.filterStore.splice(idx, 1);
      }
      console.log('filter store', state.filterStore);
      return {
        ...state,
        filterStore: [...state.filterStore],
      };
    case ADD_FILTER_BY_TEXT:
      return {
        ...state,
        searchStore: action.searchText,
      };
    default:
      return state;
  }
}

const initialCartState = {
  inCart: [],
  showItemOfCart: false,
};

export function cartItem(state = initialCartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inCart: [action.item, ...state.inCart],
      };
    case AT_CART:
      return {
        ...state,
        showItemOfCart: action.cart,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        inCart: action.newArr,
      };
    case DECREASE_QTY:
      const item = state.inCart.findIndex((pro) => pro.id === action.i.id);
      if (action.i.qty > 1) {
        state.inCart[item].qty -= 1;
      }
      return {
        ...state,
        inCart: [...state.inCart],
      };
    case INCREASE_QTY:
      const idx = state.inCart.findIndex((pro) => pro.id === action.i.id);
      if (action.i.quantity > action.i.qty) {
        state.inCart[idx].qty += 1;
      }
      return {
        ...state,
        inCart: [...state.inCart],
      };
    default:
      return state;
  }
}

export default combineReducers({
  storeItem,
  cartItem,
});
