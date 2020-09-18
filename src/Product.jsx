import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'

const Product = ({ id, title, image, price, rating }) => {
    
    const [{basket}, dispatch] = useStateValue();

    const AddtoBasket = () => {
        dispatch({
            type: 'Add_To_Basket',
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
        <div className="product">
            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>🌟</p>
                        ))
                    }
                </div>
            </div>
            
            <img src={image} alt='Product__Image'/>
            <button onClick={AddtoBasket}>Add to Basket</button>

        </div>

// <p>{ img }</p>
            
// <p>{ rating }</p>
    )
}

export default Product
