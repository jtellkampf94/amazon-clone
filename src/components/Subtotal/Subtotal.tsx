import CurrencyFormatter from "currency-formatter";
import "./Subtotal.scss";

interface SubtotalProps {
  subtotal: number;
}

const Subtotal: React.FC<SubtotalProps> = ({ subtotal }) => {
  return (
    <div className="subtotal">
      <p>
        Subtotal (0 items):{" "}
        <strong>{CurrencyFormatter.format(subtotal, { code: "USD" })}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
