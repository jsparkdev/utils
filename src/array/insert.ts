/**
 * Creates a new array with a value inserted at the specified index.
 * If the index is out of bounds, returns the original array unchanged.
 * 
 * @template T - The type of elements in the array
 * @param {Array<T>} array - The source array
 * @param {number} index - The index position to insert at (0-based)
 * @param {T} item - The value to insert
 * @returns {Array<T>} A new array with the inserted value, or the original array if index is out of bounds
 * @example
 * insert([1,2,3], 1, 4) // returns [1,4,2,3]
 * insert([1,2,3], -1, 4) // returns [1,2,3] 
 */
function insert<T>(array: T[], index: number, item: T): T[] {
  if (index < 0 || index >= array.length) {
    return array;
  }

  const result = new Array(array.length + 1);

  for (let i = 0; i < index; i++) {
    result[i] = array[i];
  }

  result[index] = item;

  for (let i = index; i < array.length; i++) {
    result[i + 1] = array[i];
  }

  return result;
}

export { insert };
