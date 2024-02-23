import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import BordItem from "../BordItem/BordItem.jsx";
import useGameInit from "../composables/useGameInit.js";
import useGameStart from "../composables/useGameStart.js";
import {GAME_STATUS} from "../../constants.js";

import "./Bord.css"
import useGameProcess from "../composables/useGameProcess.js";

export default function Board() {

    const number = 25;
    const {level} = useParams()
    const navigate = useNavigate()


    const [gameStatus, setGameStatus] = useState(GAME_STATUS.NONE);
    const [difficult, setDifficult] = useState(level);


    const {fields, setFields, init} = useGameInit(number)
    const {start, canStartGame} = useGameStart(init, fields, difficult, number, setFields, gameStatus, setGameStatus);


    const {onSelectField} = useGameProcess(fields, setFields, setGameStatus, navigate, level, setDifficult, difficult, start)


    // console.log(fields)

    return (
        <div>
            <button className={'button-go-back'} onClick={() => navigate('/')}>
                <img src={"/arrow-left-solid.svg"} alt={'arrow'}/>
                <p>
                    go back
                </p>
            </button>
            <div className="wrapper">
                <div className="board">
                    {fields.map((field) => (
                        <BordItem
                            key={field.id}
                            field={field}
                            gameStatus={gameStatus}
                            onSelectField={onSelectField}
                        />
                    ))}
                </div>
                <div className={"hard"}>
                    <b> Hard: {difficult}</b>
                </div>
                <button className={'button-start'} onClick={start} disabled={!canStartGame()}>
                    Start
                </button>
            </div>
        </div>
    );
}