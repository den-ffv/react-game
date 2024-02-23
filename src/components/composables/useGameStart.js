import {useEffect, useState} from "react";
import {FIELD, GAME_SPEED, GAME_STATUS} from "../../constants.js";


export default function useGameStart(init, fields, difficult, number, setFields, gameStatus, setGameStatu) {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }



    const prepareGame = () => {

        setGameStatu(GAME_STATUS.PREVIEW)
        setFields((prevFields) => {
            const updatedFields = [...prevFields];

            for (let i = 0; i < difficult; i++){
                const index = random(0, number - 1);
                if (updatedFields[index].value !== FIELD.FILLED){
                    updatedFields[index] = {
                        ...updatedFields[index],
                        value: FIELD.FILLED,
                    };
                }else {
                    i--;
                }
            }
            return updatedFields
        })
        setTimeout(() => {
            setGameStatu(GAME_STATUS.STARTED)

        }, GAME_SPEED)
    }

    const start = () => {
        const audio = new Audio("/click-button.mp3");
        audio.play()
        init()
        prepareGame()
    }

    const canStartGame = () => {
        return gameStatus !== GAME_STATUS.PREVIEW
    }



    return {
        start,
        canStartGame
    };
}
