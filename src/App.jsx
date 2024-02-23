import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom";
import Game from "./Game.jsx";
import Bord from "./components/Bord/Bord.jsx";

function App() {

  return (
    <>
      {/*<h1>Game</h1>*/}
        <Routes>
            <Route path={"/"} element={<Game />}/>
            <Route path={"/level/:level"} element={<Bord />}/>
        </Routes>
    </>
  )
}

export default App
