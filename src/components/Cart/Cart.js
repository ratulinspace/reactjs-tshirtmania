import React from 'react';
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {

    /* CONDITIONAL RENDERING OPTIONS */


    /* // 1. ELEMENT VARIABLE
    let command;
    if (cart.length === 0) {
        command = <p>Please add some items</p>
    }
    else if (cart.length === 1) (
        command = <p>Please, add more item ! </p>
    )
    else {
        command = <p>Thanks for adding Items</p>
    } */


    /* // 2. TERNARY OPERATION
    {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove all</button>} */


    // 3. && OPERATOR (shorthand)
    /* {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>#3 Items</p>
            </div>} */


    return (
        <div>
            <h3>Items Selected: {cart.length}</h3>

            {
                cart.map(tShirt =>
                    <p>{tShirt.name}
                        <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                    </p>
                )
            }
            {/* {command} */}
            {/* {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove all</button>} */}
            {/* {cart.length === 3 && <div>
                <h3>Trigonal</h3>
                <p>#3 Items</p>
            </div>} */}
            {/* {cart.length === 0 || <p>YOU ARE B U Y I N G</p>} */}
        </div>
    );
};

export default Cart;