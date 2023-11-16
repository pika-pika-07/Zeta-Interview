import logo from "./logo.svg";
import "./App.css";
import Grid from "./Grid";
import { useEffect, useState } from "react";

const snakeIndexes = [
  { 33: 6 },
  { 49: 9 },
  { 41: 20 },
  { 62: 5 },
  { 98: 64 },
  { 95: 75 },
  { 93: 73 },
  { 87: 16 },
  { 56: 53 },
];
const ladderIndexes = [
  { 2: 37 },
  { 6: 33 },
  { 10: 32 },
  { 27: 46 },
  { 51: 68 },
  { 71: 91 },
  { 61: 79 },
  { 65: 84 },
  { 61: 79 },
];

function App() {
  // const [players, setPlayers] = useState(["a", "b"]);
  const [currentPlayer, setCurrentPlayer] = useState("a");
  const obj = {
    a: 1,
    b: 1,
  };

  const [diceNumber, setDiceNumber] = useState(obj);

  const rollDice = () => {
    const random = Math.ceil(Math.random() * 6);
    console.log(random);
    validations(random);
  };

  const checkIfWon = () => {
    if (diceNumber[currentPlayer] === 100) {
      return true;
    }
    return false;
  };
  const validations = (n) => {
    const currentPlayerDiceNumber = diceNumber[currentPlayer];
    const isSnakeIndex = Object.keys(snakeIndexes).includes(n);
    const isLadderIndex = Object.keys(ladderIndexes).includes(n);

    if (!checkIfWon()) {
      let copy = { ...diceNumber };
      if (!isSnakeIndex && !isLadderIndex) {
        copy[currentPlayer] = copy[currentPlayer] + n;
        setDiceNumber(copy);
      } else if (isSnakeIndex) {
        copy[currentPlayer] -= decBy;
        const decBy = Object.keys(snakeIndexes).find((i) => i === n);
        setDiceNumber(copy);
      } else if (isLadderIndex) {
        const incBy = Object.keys(ladderIndexes).find((i) => i === n);
        setDiceNumber((diceNumber[currentPlayer] += incBy));
      }
    }
  };

  useEffect(() => {
    if (checkIfWon()) {
      return;
    } else {
      const playerTobeChanged = currentPlayer === "a" ? "b" : "a";
      setCurrentPlayer(playerTobeChanged);
    }
  }, [diceNumber]);
  return (
    <div className="text-3xl font-bold">
      <Grid playersData={diceNumber} />
      <button onClick={rollDice}> Roll Dice</button>
    </div>
  );
}

export default App;

//Steps
//Get random value
// array of players[1,2]
// Mark the indices of ladders and snakes
// snakesIndexes = [{start:end}]
// ladderIndexes = [{start:end}]
// Button for starting
// Grid component

// 0:
