import React from 'react';
import './game-genre.css';

//это один genre
const GameGenre = ({genre}) => {
    console.log(genre)
    return (
        <span className="game-genre">
            { genre }
        </span>
    )
}

export default GameGenre;