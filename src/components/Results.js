import { Button } from "./Buttons";

function Results({ entry }) {
  let successes = 0;
  if (entry) {
    successes = entry.initialRoll.filter((item) => item > 7).length;

    entry.bonusRolls.forEach(
      (arr) => (successes += arr.filter((item) => item > 7).length)
    );
  }

  return (
    <div>
      {" "}
      {entry &&
        "Dice rolled: " +
          entry.diceCount +
          "  | Initial roll:" +
          entry.initialRoll}
      {entry && entry.bonusRolls[0]
        ? "  | Bonus rolls:" + entry.bonusRolls
        : " "}
      {entry && " | Total successes:" + successes}
      <Button text="edit" callback={() => {}} />
    </div>
  );
}

export default Results;
