import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemInCart, deleteItemFromCart} from '../../redux/cart/reducer';
import Button from '../button';
import './game-buy.css';

const GameBuy = ({ game }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemsInCart = items.some(item => item.id === game.id);

    const handleClick = (e) => {
        e.stopPropagation();//выяснить, нужен ли он вообще
        if ( isItemsInCart) {
            dispatch(deleteItemFromCart(game))
        } else {
            dispatch(setItemInCart(game))
        }
    }

    return (
        <div className="game-buy">
            <span className="game-buy__price">{game.price} руб.</span>
            <Button
                type= {isItemsInCart ? 'secondary' : 'primary'}
                onClick={handleClick}>
                    {isItemsInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>
        </div>
    )
}

export default GameBuy;