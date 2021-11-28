import React from 'react';
import { BiCartAlt } from 'react-icons/bi';
import './cart-block.css';

const CartBlock = () => {
    return (
        <div className="cart-block">
            <BiCartAlt size={30} className="cart-block__icon"/>
            <span className="cart-block__total-price">300 bucks</span>
        </div>
    )
};

export default CartBlock;