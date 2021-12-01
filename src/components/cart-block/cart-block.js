import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';
import CartMenu from '../cart-menu';
import ItemsInCart from '../items-in-cart';

import { calcTotalPrice } from '../utils';
import { useNavigate } from 'react-router';
import './cart-block.css';

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate();

    //если функция передается, как пропс, самое время заюзать useCallback
    const handleClick = useCallback(() => { //useCallback используется, чтобы не обновлялась ссылка на handleClick
        setIsCartMenuVisible(false);
        navigate('/order');
    }, [navigate]);

    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt size={30} className="cart-block__icon" onClick={ () => setIsCartMenuVisible(!isCartMenuVisible)}/>
            { totalPrice > 0 ? (
                <span className="cart-block__total-price">{totalPrice} руб.</span> 
            ) : null}
            { isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
        </div>
    )
};

export default CartBlock;