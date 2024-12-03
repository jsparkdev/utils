/**
 * Creates a new array with a value removed at the specified index.
 * If the index is out of bounds, returns a copy of the original array.
 *
 * @template T The type of elements in the array
 * @param {T[]} array The source array
 * @param {number} index The index position to remove at
 * @returns {T[]} A new array with the value removed
 */
function remove<T>(array: T[], index: number): T[] {
  if (index >= 0 && index < array.length) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
  }
  return [...array];
}

export { remove };
