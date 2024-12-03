/**
 * Creates a new array with a value removed at the specified index.
 * If the index is out of bounds, returns a copy of the original array.
 *
 * @template T - The type of elements in the array
 * @param {T[]} array - The source array
 * @param {number} index - The index position to remove at (0-based)
 * @returns {T[]} A new array with the value at the specified index removed.
 * Returns a copy of the original array if the index is out of bounds.
 * @example
 * remove([1,2,3], 1) // returns [1,3]
 * remove(['a','b','c'], 0) // returns ['b','c']
 * remove([1,2], 5) // returns [1,2]
 */
function remove<T>(array: T[], index: number): T[] {
  if (index < 0 || index >= array.length) {
    return [...array];
  }

  const result = new Array(array.length - 1);

  for (let i = 0; i < index; i++) {
    result[i] = array[i];
  }

  for (let i = index + 1; i < array.length; i++) {
    result[i - 1] = array[i];
  }

  return result;
}

export { remove };
