import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Cart Item: {cart.length}</p>
            <p>Total Price: {}</p>
        </div>
    );
};

export default Cart;