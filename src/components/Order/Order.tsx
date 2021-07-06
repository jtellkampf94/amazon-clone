import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import CurrencyFormatter from "currency-formatter";

import { Item } from "../../context/actions";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { DBOrder } from "../Orders/Orders";

import "./Order.scss";

interface OrderProps {
  order: DBOrder;
}
const Order: React.FC<OrderProps> = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {// @ts-ignore
        moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {// @ts-ignore
      order.data.basket?.map((item: Item) => (
        <CheckoutProduct
          key={uuidv4()}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hideButton={true}
        />
      ))}
      <h3 className="order__total">
        Order Total:{" "}
        {// @ts-ignore
        CurrencyFormatter.format(order.data.amount, {
          code: "USD"
        })}
      </h3>
    </div>
  );
};

export default Order;
