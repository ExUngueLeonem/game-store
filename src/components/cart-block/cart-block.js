import React from 'react';
import { useSelector } from 'react-redux';
import CartMenu from '../cart-menu';
import { BiCartAlt } from 'react-icons/bi';
import './cart-block.css';
import { calcTotalPrice } from '../utils';

const CartBlock = () => {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);

    return (
        <div className="cart-block">
            <BiCartAlt size={30} className="cart-block__icon"/>
            <span className="cart-block__total-price">{totalPrice} руб.</span>
            <CartMenu items={items} onClick={() => null}/>
        </div>
    )
};

export default CartBlock;