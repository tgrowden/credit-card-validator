import { it, expect } from "vitest";

import sanitizeNumericInput from "./sanitizeNumericInput";

it("Should remove all non-numeric characters from the input", () => {
  expect(sanitizeNumericInput("1234-5678-9012-3456")).toBe("1234567890123456");

  expect(sanitizeNumericInput("1234 5678 9012 3456")).toBe("1234567890123456");

  expect(sanitizeNumericInput("1234a5678b9012c3456")).toBe("1234567890123456");
});
