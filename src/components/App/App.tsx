import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import Payment from "../Payment/Payment";
import { auth } from "../../firebase";
import { useStateValue } from "../../context/stateProvider";
import { ActionTypes } from "../../context/types";

import "./App.scss";

const App: React.FC = () => {
  const { dispatch } = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({ type: ActionTypes.SET_USER, payload: authUser });
      } else {
        dispatch({ type: ActionTypes.SET_USER, payload: null });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
