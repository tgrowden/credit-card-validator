export const MIN_VALID_CREDIT_CARD_LENGTH = 8;

export const MAX_VALID_CREDIT_CARD_LENGTH = 19;

/**
 * Checks the length of an input string to see if it's valid.
 *
 * Apparently, a credit card can be between 8 and 19 digits long (who knew?)
 *
 * @see https://www.capitalone.com/learn-grow/money-management/what-is-a-credit-card-number/
 *
 * @todo confirm with stakeholders if we are going to support these outliers
 */
function isValidCreditCardLength(input: string): boolean {
  return (
    input.length >= MIN_VALID_CREDIT_CARD_LENGTH &&
    input.length <= MAX_VALID_CREDIT_CARD_LENGTH
  );
}

/**
 * Checks if a credit card number is valid using the Luhn algorithm.
 *
 * @param input - The credit card number to validate
 * @returns true if the credit card number is valid, false otherwise
 *
 * @see https://en.wikipedia.org/wiki/Luhn_algorithm
 */
export default function isValidLuhnCreditCard(input: unknown) {
  if (typeof input !== "string") {
    return false;
  }

  const sanitizedInput = input.replace(/\D/g, "");

  if (!isValidCreditCardLength(sanitizedInput)) {
    return false;
  }

  const checksum = Number(sanitizedInput.charAt(sanitizedInput.length - 1));

  let total = 0;

  for (let i = sanitizedInput.length - 2; i >= 0; i--) {
    let sum = 0;
    let digit = Number(sanitizedInput.charAt(i));

    if (i % 2 === sanitizedInput.length % 2) {
      digit *= 2;
    }

    sum = Math.floor(digit / 10) + (digit % 10);
    total += sum;
  }

  if (total % 10 === 0) {
    return checksum === 0;
  }

  return 10 - (total % 10) === checksum;
}
