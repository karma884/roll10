function rollDice(diceCount) {
  const initialRoll = getRandomNumbers(diceCount);
  let bonusRolls = [];
  tensAgain(initialRoll, bonusRolls);
  const id = Date.now();

  const successes = getSuccesses(initialRoll, bonusRolls);

  return { diceCount, initialRoll, bonusRolls, id, successes };
}

function getSuccessText(successes) {
  const forFailure = [
    "Shit, what happened?",
    "Ohhhhhhhhh, that gotta hurt, but write what it was",
    "Booooyyyyyyyyyyyy, please log your failure here",
    "Pick yourself up, but first what happened?",
    "Chronicle your pain here...",
  ];
  const forSuccess = [
    "Not too shabby, tell me what happened...",
    "So, what happened?",
    "Save the memory here",
    "Heyyyy, save your story here for posterity",
    "Meeeeemories, like the one you will write here...",
  ];
  const forExceptionalSuccess = [
    "OOOOOMMMMMGGGGGG, save your ridiculousness here, queen",
    "You are exceptional, boyyyyyyyy, pls log joy here",
    "INCREDIBLE, WRITE THAT SHIT HERE IN CAPS",
    "Your mother would be proud, write her a keepsake here",
    "Chronicle your superiority here",
  ];
  if (successes === 0) {
    const random = Math.floor(Math.random() * forFailure.length);
    return forFailure[random];
  } else if (successes >= 5) {
    const random = Math.floor(Math.random() * forExceptionalSuccess.length);
    return forExceptionalSuccess[random];
  } else {
    const random = Math.floor(Math.random() * forSuccess.length);
    return forSuccess[random];
  }
}

function getSuccesses(initialRoll, bonusRolls) {
  let successes = 0;
  successes = initialRoll.filter((item) => item > 7).length;

  bonusRolls.forEach(
    (arr) => (successes += arr.filter((item) => item > 7).length)
  );
  return successes;
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

export { rollDice, getSuccessText };
