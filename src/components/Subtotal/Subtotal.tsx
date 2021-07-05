import { useHistory } from "react-router-dom";
import CurrencyFormatter from "currency-formatter";

import { getBasketTotal } from "../../context/reducer";
import { useStateValue } from "../../context/stateProvider";

import "./Subtotal.scss";

const Subtotal: React.FC = () => {
  const history = useHistory();
  const {
    state: { basket }
  } = useStateValue();

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>
          {CurrencyFormatter.format(getBasketTotal(basket), { code: "USD" })}
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
