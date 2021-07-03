import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Checkout from "../Checkout/Checkout";

import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
