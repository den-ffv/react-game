import React from "react";
import "./BordItem.css"
import {FIELD, GAME_STATUS} from "../../constants.js";

function BoardItem({ field, gameStatus, onSelectField }) {

    const getItemCalsses = () => {
    let classes = "item "
        if (field.value === FIELD.FILLED && gameStatus === GAME_STATUS.PREVIEW
            || field.clicked && field.value === FIELD.FILLED){
            classes += "active ";
        }

        if ( field.clicked && field.value === FIELD.EMPTI){
            classes += "error ";
        }
        return classes
    }

    const select = (id) => {
        if (gameStatus === GAME_STATUS.STARTED) {
            onSelectField(id);
            const audio = new Audio('/select-click.wav');
            audio.volume = 0.5;
            audio.play();
        }
    };



    return <span className={getItemCalsses()} onClick={() => select(field.id)}>
        {/*{field.clicked.toString()}*/}
    </span>;
}
export default BoardItem