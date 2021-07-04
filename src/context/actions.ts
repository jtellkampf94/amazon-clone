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

export type Action = AddToBasketAction;
