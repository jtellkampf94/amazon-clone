import { ActionTypes } from "./types";

export interface Item {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

interface AddToBasketAction {
  type: ActionTypes.ADD_TO_BASKET;
  payload: Item;
}

interface RemoveFromBasketAction {
  type: ActionTypes.REMOVE_FROM_BASKET;
  payload: String;
}

export type Action = AddToBasketAction | RemoveFromBasketAction;
