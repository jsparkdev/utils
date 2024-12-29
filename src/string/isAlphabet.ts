/**
 * Checks if a character is an alphabet letter (A-Z or a-z).
 * @param {string} char - The character to check
 * @returns {boolean} Returns true if the character is an alphabet letter (A-Z or a-z), false if not a string or empty
 * @throws {Error} Throws if input is more than one character
 * @example
 * isAlphabetChar('A') // true
 * isAlphabetChar('1') // false
 * isAlphabetChar('aa') // throws Error
 */
function isAlphabetChar(char: string): boolean {
	if (typeof char !== "string") return false;
	if (char.length === 0) return false;
	if (char.length !== 1) {
		throw new Error(
			"Input must be a single character. For checking multiple characters, use isAlphabetString() instead",
		);
	}
	return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
}

/**
 * Checks if a string contains only alphabet letters (A-Z or a-z).
 * @param {string} str - The string to check
 * @returns {boolean} Returns true if the string contains only alphabet letters, false if not a string or empty
 * @example
 * isAlphabetString('Hello') // true
 * isAlphabetString('Hello123') // false
 * isAlphabetString('') // false
 * isAlphabetString(123) // false
 */
function isAlphabetString(str: string): boolean {
	if (typeof str !== "string") return false;
	if (str.length === 0) return false;
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i);
		if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
			return false;
		}
	}
	return true;
}

export { isAlphabetChar, isAlphabetString };
