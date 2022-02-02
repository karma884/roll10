import Results from "./Results";

function History({ entries, addComment }) {
  return entries.map((entry) => (
    <Results
      entry={entry}
      key={`historical-entry-${entry._id}`}
      addComment={addComment}
    />
  ));
}

export default History;
