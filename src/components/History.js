import Results from "./Results";

function History({ entries }) {
  return entries.map((entry, i) => (
    <Results entry={entry} key={`historical-entry-${i}`} />
  ));
}

export default History;
