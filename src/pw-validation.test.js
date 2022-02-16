import { testPasswordStrength } from "./pw-validation";

test("properly validates passwords", () => {
  expect(testPasswordStrength("g£i23Eg3").success).toBe(true);
  expect(testPasswordStrength("aB3aaa()").success).toBe(false);
  expect(testPasswordStrength("aB3aa-=!£$%^&*()").success).toBe(false);
  expect(testPasswordStrength("123456789").success).toBe(false);
});

//   let testLowerCase = /(?=.*[a-z])/;
//   let testUpperCase = /(?=.*[A-Z])/;
//   let testNumerals = /(?=.*[0-9])/;
//   let testLength = /^[a-zA-Z0-9!@#$%^&*£]{6,30}$/;

//   console.log(password);
//   const boolLowerCase = testLowerCase.test(password);
//   const boolUpperCase = testUpperCase.test(password);
//   const boolNumerals = testNumerals.test(password);
//   const boolLength = testLength.test(password);

//   console.log(boolLowerCase);
//   console.log(boolUpperCase);
//   console.log(boolNumerals);
//   console.log(boolLength);

//   const result = boolLowerCase * boolUpperCase * boolNumerals * boolLength;
//   console.log(result);
//   return { success: result };
// }

// export { testPasswordStrength };
