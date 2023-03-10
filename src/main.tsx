import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GameMachine, GameModel } from './machine/GameMachine'
import { interpret } from 'xstate'

const machine = interpret(GameMachine).start()
/*
console.log(machine.send(GameModel.events.join('1', '1')).changed)
console.log(machine.send(GameModel.events.join('1', '1')).changed)
console.log(machine.send(GameModel.events.join('2', '2')).changed)
*/
/*
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/