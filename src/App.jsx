import Card from "./components/Card"
import "./App.css"
import { GenerateGame } from "./logic/logic"
import { useState } from "react"
import { useEffect } from "react"
function App() {
  const [userValue, setUserValue] = useState('')
  const [game, setGame] = useState([])
  useEffect(() => {
    setGame(GenerateGame(12))
  }, [])
  const handleNewGame = () => {
    setGame(GenerateGame(parseInt(userValue)))
  }
  return (
    <>
      {game.map((card, index) => (
        <Card
          key={index}
          flipped
          valor={card.valor}
          color={card.color}
          icono={card.icono}
        />
      ))}
      <div className="NewGame">
        <input type="number" onChange={e => setUserValue(e.target.value)} /><button onClick={handleNewGame}>Nueva partida</button>
      </div>
    </>
  )
}

export default App
