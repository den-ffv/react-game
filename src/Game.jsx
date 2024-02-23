import React from 'react'
import Level from "./components/Level/Level.jsx";

function Game() {
    const numberOfLevel = [1, 2, 3, 4, 5, 6]
    return (
        <div className={'game'}>
            <h1>Memory Game</h1>
            <h2>Level: </h2>
            <div className={'levels'}>
                {numberOfLevel.map(elem => (
                    <Level key={elem} level={elem}/>
                ))}
            </div>
        </div>
    )
}

export default Game