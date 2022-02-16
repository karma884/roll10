import { useEffect, useState } from "react";
import { Button, Buttons } from "./Buttons";
import { rollDice } from "../helpers";
import Results from "./Results";
import History from "./History";
import { deleteAll, Api } from "../api";
import url from "../api-url";

function Game() {
  const [currentDice, setCurrentDice] = useState({ count: 0 });
  const [historicalRolls, setHistoricalRolls] = useState([]);

  function addComment(entry, comment) {
    setHistoricalRolls(
      historicalRolls.map((ent) => (ent === entry ? { ...ent, comment } : ent))
    );
  }

  function postDice(newEntry) {
    return fetch(`${url}entries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry),
    })
      .then((res) => {
        return res.json();
      })
      .then((insertedEntry) => {
        setHistoricalRolls([insertedEntry, ...historicalRolls]);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (currentDice.count > 0) {
      const newEntry = rollDice(currentDice.count);
      postDice(newEntry);
    }
  }, [currentDice]);

  useEffect(() => {
    fetch(`${url}entries`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
      .then((res) => {
        return res.json();
      })
      .then((entries) => {
        setHistoricalRolls(entries);
      });
  }, []);

  return (
    <div className="col-10 game">
      <h1>Ray and Marju's Vampire dice rolls</h1>
      <div id="buttons">
        <Buttons onAdd={setCurrentDice} />
      </div>
      <h3>Your last dice roll was: </h3>
      <Results entry={historicalRolls[0]} addComment={addComment} />
      <h3>Your rolling history is: </h3>
      <History entries={historicalRolls} addComment={addComment} />
      <Button
        text="DELETE ALL ROLLS"
        className="btn btn-primary"
        callback={() => deleteAll(setHistoricalRolls)}
      />{" "}
      <Button
        text="Monte Carlo me please"
        className="btn btn-secondary"
        callback={() => {}}
      />
      <h3>Monte Carlo table: </h3>
    </div>
  );
}

export default Game;
