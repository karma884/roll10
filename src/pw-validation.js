function testPasswordStrength(password) {
  let testLowerCase = /(?=.*[a-z])/;
  let testUpperCase = /(?=.*[A-Z])/;
  let testNumerals = /(?=.*[0-9])/;
  let testLength = /^[a-zA-Z0-9!@#$%^&*£]{6,30}$/;

  console.log(password);
  const boolLowerCase = testLowerCase.test(password);
  const boolUpperCase = testUpperCase.test(password);
  const boolNumerals = testNumerals.test(password);
  const boolLength = testLength.test(password);

  const result = boolLowerCase && boolUpperCase && boolNumerals && boolLength;
  console.log(result);
  return { success: result };
  //let passwordValidator =
  ///^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  ///^(?=.*[0-9])[a-zA-Z0-9]{6,30}$/;
}

export { testPasswordStrength };
