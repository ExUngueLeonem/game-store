import React from 'react';
import Button from '../button';
import './game-buy.css';

const GameBuy = ({ game }) => {
    return (
        <div className="game-buy">
            <span className="game-buy__price">{game.price} руб.</span>
            <Button
                type='primary'
                onClick={() => console.log('В корзину')}>
                В Корзину
            </Button>
        </div>
    )
}

export default GameBuy;