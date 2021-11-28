import React from 'react';
import './game-genre.css';

const GameGenre = ({genre, key}) => {
    console.log(genre)
    return (
        <span className="game-genre" key={genre}>
            { genre }
        </span>
        
    )
}

export default GameGenre;