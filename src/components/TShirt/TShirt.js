import React from 'react';
import './TShirt.css';

const TShirt = (props) => {

    const { handleAddToCart, tShirt } = props;

    const { name, picture, price } = props.tShirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)} className='cart-btn'>Add to cart</button>
        </div>
    );
};

export default TShirt;