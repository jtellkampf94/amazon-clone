import { ActionTypes } from "./types";
import firebase from "firebase";

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

interface SetUserAction {
  type: ActionTypes.SET_USER;
  payload: null | firebase.User;
}

export type Action = AddToBasketAction | RemoveFromBasketAction | SetUserAction;
