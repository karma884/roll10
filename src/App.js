import { useState } from "react"

function makeButton(diceCount, callback) {
  return <button
    key={`dice-count-${diceCount}`}
    onClick={() => callback(diceCount)}
    className="btn btn-primary">{diceCount}
  </button>
}

function App() {

  const [currentDice, setCurrentDice] = useState(0)

  function addButtons() {
    return Array.from(Array(25)).map((_, index) => {
      return makeButton(index + 1, setCurrentDice)
    })
  }

  return (<div>
    <h1>Hello everyone</h1>

    {currentDice}

    <div id="buttons">{addButtons()}</div>
    <h3>Your dice roll was: </h3>
    <div id="result"> </div>
    <h3>Your rolling history is: </h3>
    <div id="log"></div>
    <button id="monteCarlo">Monte Carlo please </button>
    <h3>Monte Carlo table: </h3>
  </div>
  );
}

export default App;
