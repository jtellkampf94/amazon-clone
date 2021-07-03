import Subtotal from "../Subtotal/Subtotal";

import "./Checkout.scss";

const Checkout: React.FC = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349266B_.jpg"
          alt="Advertisement"
          className="checkout__ad"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal subtotal={500} />
      </div>
    </div>
  );
};

export default Checkout;
