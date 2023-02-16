import React from 'react'
import './Game.css'


export function Game({verifyLetter}) {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
  )
}
