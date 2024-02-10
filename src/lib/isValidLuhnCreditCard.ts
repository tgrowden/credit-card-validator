import isValidCreditCardLength from "./isValidCreditCardLength";
import sanitizeNumericInput from "./sanitizeNumericInput";

/**
 * Checks if a credit card number is valid using the Luhn algorithm.
 *
 * @param input - The credit card number to validate
 * @returns true if the credit card number is valid, false otherwise
 *
 * @see https://en.wikipedia.org/wiki/Luhn_algorithm
 */
export default function isValidLuhnCreditCard(input: string) {
  if (typeof input !== "string") {
    return false;
  }

  const sanitizedInput = sanitizeNumericInput(input);

  if (!isValidCreditCardLength(sanitizedInput)) {
    return false;
  }

  /**
   * Assuming that the checkDigit is the last digit of the input
   */
  const checkDigit = Number(sanitizedInput.charAt(sanitizedInput.length - 1));

  let total = 0;

  /**
   * Iterate over every digit in the input string, having dropped the check-digit
   */
  for (let i = sanitizedInput.length - 2; i >= 0; i--) {
    let digit = Number(sanitizedInput.charAt(i));

    // double the value of every second digit from the right
    if (i % 2 === sanitizedInput.length % 2) {
      digit *= 2;
    }

    total += Math.floor(digit / 10) + (digit % 10);
  }

  if (total % 10 === 0) {
    return checkDigit === 0;
  }

  /**
   * The check digit is calculated by `(10 - (s % 10)) % 10`
   * where `s` is the sum of all the digits in the input string
   */
  return (10 - (total % 10)) % 10 === checkDigit;
}
