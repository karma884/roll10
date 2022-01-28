function rollDice(diceCount) {
  const initialRoll = getRandomNumbers(diceCount);
  let bonusRolls = [];
  tensAgain(initialRoll, bonusRolls);

  return { diceCount, initialRoll, bonusRolls };
}

function getRandomNumbers(numbersNeeded) {
  let numbersArray = [];
  for (let i = 0; i < numbersNeeded; i++) {
    numbersArray.push(Math.ceil(Math.random() * 10));
    numbersArray.sort((a, b) => a - b);
  }
  //successes += numbersArray.filter((item) => item > 7).length;
  return numbersArray;
}

function tensAgain(theArray, bonusRolls) {
  let tenCount = theArray.filter((item) => item === 10).length;
  if (tenCount === 0) {
    return;
  }
  let bonusRoll = getRandomNumbers(tenCount);
  bonusRolls.push(bonusRoll);

  tensAgain(bonusRoll, bonusRolls);
}

export { rollDice };
