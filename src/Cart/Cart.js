import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let total =0;
    let totalShipping = 0;
    let tax = 0;

    for(const product of cart){
        total+=product.price;
        totalShipping+=product.shipping;
        tax = total * 0.2;
    };
    let grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Cart Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Total Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;