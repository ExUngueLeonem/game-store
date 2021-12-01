import React from "react";
import { useSelector } from "react-redux";
import GameGenre from "../../components/game-genre";
import './game-page.css';

const GamePage = () => {
    const game = useSelector(state => state.game.currentGame);

    if(game) return null;

    return (
        <div className="game-page">
            <h1 className="game-page__title">{game.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe
                        width="90%"
                        heigth="400px"
                        src={game.video.src}
                        title="YouTube video player"
                    ></iframe>
                </div>

                <div className="game-page__right">
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className="secondary-text">Популярные метки:</p>
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}
                </div>
            </div>
        </div>
    )
}

export default GamePage;