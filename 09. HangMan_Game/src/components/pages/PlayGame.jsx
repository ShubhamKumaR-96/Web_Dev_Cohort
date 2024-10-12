import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const PlayGame = () => {
    const{state}=useLocation();
  return (
    <div>
     <h1>Play Game {state.wordSelected}</h1>
      <Link to='/start' className="text-blue-500"> Start Game Link
      </Link>
    </div>
  )
}

export default PlayGame
