/**
 * Checks if a character is an alphabet letter (A-Z or a-z).
 * @param {string} char - The character to check
 * @returns {boolean} True if the character is an alphabet letter, false otherwise
 * @throws {Error} If input is not a single character
 */
function isAlphabetChar(char: string): boolean {
  if (typeof char !== "string") return false;
  if (char.length !== 1) {
    throw new Error("Input must be a single character");
  }
  return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
}

/**
 * Checks if a string contains only alphabet letters.
 * @param {string} str - The string to check
 * @returns {boolean} True if the string contains only alphabet letters, false otherwise
 */
function isAlphabetString(str: string): boolean {
  if (typeof str !== "string") return false;
  return [...str].every(isAlphabetChar);
}

export { isAlphabetChar, isAlphabetString };
