import React from "react";
import { useStateValue } from "./StateProvider";
import './CheckoutProduct.css'
const CheckoutProduct = ({ id, title, image, price, rating }) => {

    const [{basket}, dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        dispatch({
            type: 'Remove_From_Basket',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

  return (
    <div className="checkout__product">
      <img src={image} alt="${title} image" className="checkoutProduct__image"/>
      <div className="checkoutProduct__Info">
        <p className="checkoutProduct__Title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>

        <button onClick={RemoveFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
