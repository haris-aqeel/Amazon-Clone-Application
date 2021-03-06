import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  let count = 0;
  basket.map(({price})=>count+=price);
  return (
    <div className= "main__checkout">
      <div className="checkout">
        <img
          className="checkout__Add"
          alt="Advertisement"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty.</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            {basket.map((item)=>{
              return <CheckoutProduct 
                key={item.id}
                id={item.id}
                title={item.title}
                image = {item.image}
                price={item.price}
                rating={item.rating}/>
            })
            }
          </div>
        )}
      </div>

        {basket.length> 0 &&(
      <div className="checkout__right">
        <div className="subtotal">
          
        <p>Subtotal ({basket.length} items): <strong>${(count.toFixed(2))}</strong></p>
        <p><input type="checkbox" className='inputBox'/>This order contains a gift</p>
        <button>Proceed to Checkout</button>
        </div>
      </div>
    )}
    </div>
    
  
  );
};

export default Checkout;
