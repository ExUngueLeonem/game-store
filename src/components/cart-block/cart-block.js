import React from 'react';
import { useSelector } from 'react-redux';
import CartMenu from '../cart-menu';
import { BiCartAlt } from 'react-icons/bi';
import './cart-block.css';

const CartBlock = () => {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0)

    return (
        <div className="cart-block">
            <BiCartAlt size={30} className="cart-block__icon"/>
            <span className="cart-block__total-price">{totalPrice} руб.</span>
            <CartMenu />
        </div>
    )
};

export default CartBlock;