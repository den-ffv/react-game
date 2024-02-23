import {FIELD, GAME_SPEED, GAME_STATUS} from "../../constants.js";
import {useEffect} from "react";

export default function useGameProcess(fields, setFields, setGameStatus, navigate, level, setDifficult, difficult, start) {

    const onSelectField = (id) => {
        console.log(id);
        const index = fields.findIndex((field) => field.id === id);

        if (index > -1 && !fields[index].clicked) {
            setFields((prevFields) => {
                const updatedFields = [...prevFields];
                updatedFields[index].clicked = true;
                return updatedFields;
            })
            setTimeout(() => {
                checkGame();
            }, 0)
        }

    };

    const checkGame = () => {
        const errorIndex = fields.findIndex(
            (field) => field.clicked && field.value === FIELD.EMPTI);

        console.log("fields", fields);


        if (errorIndex > -1) {
            console.log('111')
            setGameOver();
            return;
        }
        const notFoundItemIndex = fields.findIndex(
            (field) => !field.clicked && field.value === FIELD.FILLED);

        if (notFoundItemIndex === -1) {
            setWin();
        }
    };
    const setGameOver = () => {
        console.log("fail");
        setGameStatus(GAME_STATUS.FAIL);
        setTimeout(() => {
            const audio = new Audio('/error.mp3');
            audio.play();
        }, 500)

        if (difficult >= 1) {
            setDifficult(Number(difficult) - 1)
            setTimeout(() => {
                start()
            }, GAME_SPEED)
            navigate(`/level/${Number(level) - 1}`);
            return;
        } else {
            setDifficult(1)
            setTimeout(() => {
                start()
            }, GAME_SPEED)
            navigate(`/level/${1}`);
        }
    };

    const setWin = () => {
        console.log("win");
        setGameStatus(GAME_STATUS.WIN);
        if (difficult <= 6){
            setDifficult(Number(difficult) + 1)

            setTimeout(() => {
                start()
            }, GAME_SPEED)

            navigate(`/level/${Number(level) + 1}`);
        }else {
            setDifficult(6)

            setTimeout(() => {
                start()
            }, GAME_SPEED)

            navigate(`/level/${6}`);
        }

    };


    return {onSelectField};
}
