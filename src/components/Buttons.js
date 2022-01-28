const Buttons = ({ onAdd }) => {
  return Array.from(Array(25)).map((_, index) => {
    const diceCount = index + 1;
    return (
      <Button
        text={diceCount}
        className="btn btn-primary"
        callback={() => {
          onAdd({ count: diceCount });
        }}
        key={`dice-count-${diceCount}`}
      />
    );
  });
};

const Button = ({ text, className, callback }) => {
  return (
    <button onClick={callback} className={className}>
      {text}
    </button>
  );
};

export { Button, Buttons };
