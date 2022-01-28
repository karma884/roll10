import { useEffect, useState } from "react";
import { Button, Buttons } from "./components/Buttons";
import { rollDice } from "./helpers";
import Results from "./components/Results";
import History from "./components/History";

function App() {
  const [currentDice, setCurrentDice] = useState({ count: 0 });
  const [historicalRolls, setHistoricalRolls] = useState([]);

  useEffect(() => {
    console.log(historicalRolls.diceCount);
    if (currentDice.count > 0) {
      const newEntry = rollDice(currentDice.count);
      setHistoricalRolls([newEntry, ...historicalRolls]);
    }
  }, [currentDice]);

  return (
    <div>
      <h1>Hello everyone</h1>

      <div id="buttons">
        <Buttons onAdd={setCurrentDice} />
      </div>
      <h3>Your dice roll was: </h3>
      <Results entry={historicalRolls[0]} />
      <h3>Your rolling history is: </h3>
      <History entries={historicalRolls} />
      <Button text="Monte Carlo me please" callback={() => {}} />
      <h3>Monte Carlo table: </h3>
    </div>
  );
}

export default App;
