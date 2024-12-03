/**
 * Creates a new array with a value inserted at the specified index.
 * If the index is out of bounds, returns the original array unchanged.
 *
 * @template T The type of elements in the array
 * @param {T[]} array The source array
 * @param {number} index The index position to insert at
 * @param {T} item The value to insert
 * @returns {T[]} A new array with the inserted value or the original array if index is out of bounds
 */
function insert<T>(array: T[], index: number, item: T): T[] {
  if (index >= 0 && index < array.length) {
    return [...array.slice(0, index), item, ...array.slice(index)];
  }
  return array;
}

export { insert };
