import React from 'react'
import './End.css'

export function End({retry}) {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Reiniciar o jogo</button>
    </div>
  )
}
