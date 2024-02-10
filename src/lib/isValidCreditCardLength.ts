export const MIN_VALID_CREDIT_CARD_LENGTH = 8;

export const MAX_VALID_CREDIT_CARD_LENGTH = 19;

/**
 * Checks the length of an input string to see if it's valid.
 *
 * Apparently, a credit card can be between 8 and 19 digits long (who knew?)
 *
 * @see https://www.capitalone.com/learn-grow/money-management/what-is-a-credit-card-number/
 *
 */
export default function isValidCreditCardLength(input: unknown): boolean {
  if (typeof input !== "string") {
    return false;
  }

  return (
    input.length >= MIN_VALID_CREDIT_CARD_LENGTH &&
    input.length <= MAX_VALID_CREDIT_CARD_LENGTH
  );
}
