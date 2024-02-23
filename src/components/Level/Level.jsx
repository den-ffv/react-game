import React from 'react'
import "./Level.css"
import {Link} from "react-router-dom";
function Level({level}) {

    return (
        <Link to={`/level/${level}`} className={'level'}>
            <p>{level}</p>
        </Link>
    )
}

export default Level