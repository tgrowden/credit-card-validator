"use server";

import isValidLuhn from "@/lib/isValidLuhnCreditCard";

/**
 * used for type-narrowing
 */
function isString(value: unknown): value is string {
  return typeof value === "string";
}

export default async function handleFormSubmission(formData: FormData) {
  const cardNumber = formData.get("cardNumber");

  // type-narrowing; this should never happen
  if (!isString(cardNumber)) {
    return {
      error: "Input must be a string"
    };
  }

  if (!isValidLuhn(cardNumber)) {
    return {
      error: "Invalid card number"
    };
  }

  return {
    success: true
  };
}
