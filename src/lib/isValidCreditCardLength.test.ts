import { expect, it } from "vitest";
import { faker } from "@faker-js/faker";

import isValidCreditCardLength, {
  MIN_VALID_CREDIT_CARD_LENGTH,
  MAX_VALID_CREDIT_CARD_LENGTH
} from "./isValidCreditCardLength";

it("Should return false if the input is not a string", () => {
  expect(isValidCreditCardLength(123)).toBe(false);

  expect(isValidCreditCardLength({})).toBe(false);

  expect(isValidCreditCardLength([])).toBe(false);

  expect(isValidCreditCardLength(null)).toBe(false);

  expect(isValidCreditCardLength(undefined)).toBe(false);
});

it("Should return false when the input is less than the length of a valid credit card number", () => {
  expect(
    isValidCreditCardLength(
      faker.string.numeric({
        length: {
          min: 1,
          max: MIN_VALID_CREDIT_CARD_LENGTH - 1
        }
      })
    )
  ).toBe(false);
});

it("Should return false when the input is greater than the length of a valid credit card number", () => {
  expect(
    isValidCreditCardLength(
      faker.string.numeric({
        length: {
          min: MAX_VALID_CREDIT_CARD_LENGTH + 1,
          max: MAX_VALID_CREDIT_CARD_LENGTH + 10
        }
      })
    )
  ).toBe(false);
});

it("Should return true if the input is a valid length", () => {
  const val = faker.string.numeric({
    length: {
      min: MIN_VALID_CREDIT_CARD_LENGTH,
      max: MAX_VALID_CREDIT_CARD_LENGTH
    }
  });

  expect(val.length).toBeLessThanOrEqual(MAX_VALID_CREDIT_CARD_LENGTH);
  expect(val.length).toBeGreaterThanOrEqual(MIN_VALID_CREDIT_CARD_LENGTH);
  expect(isValidCreditCardLength(val)).toEqual(true);
});
