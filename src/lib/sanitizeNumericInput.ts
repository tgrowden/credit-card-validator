/**
 * Takes a string input and removes any non-numeric characters
 */
export default function sanitizeNumericInput(input: string): string {
  return input.replace(/\D/g, "");
}
