/**
 * Creates a new object by transforming each property using the provided callback function.
 * The original object remains unchanged.
 *
 * @param obj - The source object to transform
 * @param transform - Function to transform each property
 * @returns A new object with transformed values
 * @example
 * const user = { name: 'John', age: 30 };
 * map(user, ({ key, value }) => `${key}_${value}`);
 * // Result: { name: 'name_John', age: 'age_30' }
 */
export function map<T extends object, R>(
	obj: T,
	transform: (params: { key: keyof T; value: T[keyof T] }) => R,
): Record<keyof T, R> {
	if (!obj || typeof obj !== "object") {
		throw new TypeError("First argument must be an object");
	}

	return Object.entries(obj).reduce(
		(acc, [key, value]) => {
			acc[key as keyof T] = transform({
				key: key as keyof T,
				value: value as T[keyof T],
			});
			return acc;
		},
		{} as Record<keyof T, R>,
	);
}
