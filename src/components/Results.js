import Comment from "./Comment.js";

function Results({ entry, addComment }) {
  return (
    <>
      {entry ? (
        <div>
          <span>
            Dice rolled: {entry.diceCount + " | Initial roll: "}
            {entry.initialRoll + " "}
          </span>
          {!entry.successes && (
            <>
              | <span className="failure">Failure!</span>
            </>
          )}

          {entry.bonusRolls[0] && (
            <span>| Bonus rolls: {" " + entry.bonusRolls} </span>
          )}
          {entry.successes >= 5 ? (
            <b className="exceptional">
              Exceptional Success! {entry.successes}
            </b>
          ) : (
            <span>
              {" "}
              | Successes: <b>{entry.successes}</b>
            </span>
          )}

          <Comment entry={entry} addComment={addComment} />
        </div>
      ) : (
        <> </>
      )}
    </>
  );
}

export default Results;
