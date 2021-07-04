import StarIcon from "@material-ui/icons/Star";
import { v4 as uuidv4 } from "uuid";

import { useStateValue } from "../../context/stateProvider";
import { ActionTypes } from "../../context/types";

import "./Product.scss";

interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Product: React.FC<ProductProps> = ({
  id,
  title,
  image,
  price,
  rating
}) => {
  const { dispatch } = useStateValue();

  const handleClick = (): void => {
    dispatch({
      type: ActionTypes.ADD_TO_BASKET,
      payload: {
        id,
        title,
        image,
        price,
        rating
      }
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(0)
            .map(() => (
              <StarIcon key={uuidv4()} />
            ))}
        </div>
      </div>

      <img src={image} alt="Product Image" />

      <button onClick={handleClick}>Add to Basket</button>
    </div>
  );
};

export default Product;
