import { useEffect, useState } from "react";
import { Button, Buttons } from "./components/Buttons";
import { rollDice } from "./helpers";
import Results from "./components/Results";
import History from "./components/History";
import Api from "./api";

function App() {
  const [currentDice, setCurrentDice] = useState({ count: 0 });
  const [historicalRolls, setHistoricalRolls] = useState([]);

  function addComment(entry, comment) {
    setHistoricalRolls(
      historicalRolls.map((ent) => (ent === entry ? { ...ent, comment } : ent))
    );
  }

  function postDice(newEntry) {
    console.log(newEntry);
    return fetch("http://localhost:5000/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry),
    })
      .then((res) => {
        return res.json();
      })
      .then((newHistory) => setHistoricalRolls(newHistory))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (currentDice.count > 0) {
      const newEntry = rollDice(currentDice.count);
      postDice(newEntry);
    }
  }, [currentDice]);

  useEffect(() => {
    //const api = new Api(fetch);
    fetch("http://localhost:5000/entries")
      .then((res) => {
        return res.json();
      })
      .then((entries) => {
        setHistoricalRolls(entries);
      });
  }, []);

  return (
    <div>
      <h1>Ray and Marju's Vampire dice rolls</h1>

      <div id="buttons">
        <Buttons onAdd={setCurrentDice} />
      </div>
      <h3>Your last dice roll was: </h3>
      <Results entry={historicalRolls[0]} addComment={addComment} />
      <h3>Your rolling history is: </h3>
      <History entries={historicalRolls} addComment={addComment} />
      <Button
        text="Monte Carlo me please"
        className="btn btn-secondary"
        callback={() => {}}
      />
      <h3>Monte Carlo table: </h3>
    </div>
  );
}

export default App;
