import React from 'react'
import './Product.css'


const Product = ({ id, title, img, price, rating }) => {
    return (
        <div className="product">
            <p>{ title }</p>
            <p className="product__price">
                <small>$</small>
                <strong>{ price }</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating).fill.map(()=>{
                        
                    })
                }
            </div>
            
            
        </div>

// <p>{ img }</p>
            
// <p>{ rating }</p>
    )
}

export default Product
