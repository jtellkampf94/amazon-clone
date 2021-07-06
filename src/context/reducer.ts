import { Item, Action } from "./actions";
import { ActionTypes } from "./types";
import firebase from "firebase";

export interface State {
  basket: Item[];
  user: null | firebase.User;
}

export const initialState: State = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket: Item[]) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.payload] };
    case ActionTypes.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(item => item.id === action.payload);
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload}) as its not in basket!`
        );
      }
      return { ...state, basket: newBasket };
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case ActionTypes.EMPTY_BASKET:
      return { ...state, basket: [] };
    default:
      return state;
  }
};

export default reducer;
