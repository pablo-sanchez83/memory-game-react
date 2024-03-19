import Card from "./components/Card";
import "./App.css";
import { GenerateGame } from "./logic/logic";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
function App() {
  const [game, setGame] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [firstCardIndex, setFirstCardIndex] = useState(null);
  const [secondCardIndex, setSecondCardIndex] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [clickEnabled, setClickEnabled] = useState(true);

  useEffect(() => {
    setGame(GenerateGame(12));
  }, []);

  const handleNewGame = () => {
    setFlippedIndices([]);
    setGame(GenerateGame(12));
    setGameOver(false);
  };

  const handlePlay = (index) => {
    if (!gameOver && clickEnabled && !flippedIndices.includes(index)) {
      setFlippedIndices((prevValue) => [...prevValue, index]);
  
      if (firstCardIndex === null || secondCardIndex !== null) {
        setFirstCardIndex(index);
        setSecondCardIndex(null);
      } else if (firstCardIndex !== null && secondCardIndex === null) {
        setSecondCardIndex(index);
  
        const firstCard = game[firstCardIndex];
        const secondCard = game[index]; // Utilizamos el índice actual
  
        if (firstCard.pareja === secondCard.id && secondCard.pareja === firstCard.id) {
          setClickEnabled(false);
          setTimeout(() => {

            setFirstCardIndex(null);
            setSecondCardIndex(null);
            console.log(flippedIndices.length , game.length)
            if (flippedIndices.length === game.length - 1) {
              handleWin();
            }
            setClickEnabled(true);
          }, 500);
        } else {
          setClickEnabled(false);
          setTimeout(() => {
            setFlippedIndices(prevValue => {
              const newFlippedIndices = [...prevValue];
              newFlippedIndices.splice(newFlippedIndices.indexOf(firstCardIndex), 1);
              newFlippedIndices.splice(newFlippedIndices.indexOf(index), 1);
              return newFlippedIndices;
            });
            setFirstCardIndex(null);
            setSecondCardIndex(null);
            setClickEnabled(true);
          }, 1000);
        }
      }
    }
  };
  const handleWin = () => {
    setGameOver(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  return (
    <>
      {game.map((card, index) => (
        <Card
          key={index}
          flipped={flippedIndices.includes(index)}
          valor={card.valor}
          color={card.color}
          icono={card.icono}
          handlePlay={() => handlePlay(index)}
        />
      ))}
      <div className="NewGame">
        <button onClick={handleNewGame}>Nueva partida</button>
      </div>
      {
        gameOver && <h1 className="win">Ganaste</h1>
      }
    </>
  );
}

export default App;
