import StarIcon from "@material-ui/icons/Star";
import { v4 as uuidv4 } from "uuid";

import { useStateValue } from "../../context/stateProvider";
import { ActionTypes } from "../../context/types";

import "./CheckoutProduct.scss";

interface CheckoutProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  rating: number;
}

const CheckoutProduct: React.FC<CheckoutProductProps> = ({
  id,
  image,
  title,
  price,
  rating
}) => {
  const { dispatch } = useStateValue();

  const handleClick = (): void => {
    dispatch({ type: ActionTypes.REMOVE_FROM_BASKET, payload: id });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="Product Image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill(0)
            .map(() => (
              <StarIcon key={uuidv4()} className="checkoutProduct__star" />
            ))}
        </div>
        <button onClick={handleClick}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
