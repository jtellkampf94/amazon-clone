import { Item, Action } from "./actions";
import { ActionTypes } from "./types";

export interface State {
  basket: Item[];
}

export const initialState: State = {
  basket: []
};

export const getBasketTotal = (basket: Item[]) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.payload] };
    default:
      return state;
  }
};

export default reducer;
