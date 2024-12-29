type PredicateFunction<T> = (value: T) => boolean;

type Predicate<T extends object> = {
	key?: PropertyKey | PredicateFunction<PropertyKey>;
	value?: T[keyof T] | PredicateFunction<T[keyof T]>;
};

/**
 * Type guard for checking if a value is a predicate function
 */
function isPredicate<T>(value: unknown): value is PredicateFunction<T> {
	return typeof value === "function";
}

/**
 * Creates a new object by filtering properties based on direct values or predicate functions.
 * The original object remains unchanged.
 *
 * @param obj - The source object to filter
 * @param predicates - An object containing direct values or predicate functions
 * @returns A new object containing only the properties that match all conditions
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 *
 * // Filter by key
 * filter(obj, { key: 'a' }) // { a: 1 }
 *
 * // Filter by value
 * filter(obj, { value: 2 }) // { b: 2 }
 *
 * // Filter using predicates
 * filter(obj, {
 *   key: k => k === 'a' || k === 'b',
 *   value: v => v > 1
 * }) // { b: 2 }
 */
export function filter<T extends object>(
	obj: T,
	predicates: Predicate<T>,
): Partial<T> {
	if (!obj || typeof obj !== "object") {
		throw new TypeError("First argument must be an object");
	}

	return Object.entries(obj).reduce(
		(acc, [key, value]) => {
			const keyMatches =
				!predicates.key ||
				(isPredicate<PropertyKey>(predicates.key)
					? predicates.key(key)
					: key === String(predicates.key));

			const valueMatches =
				!predicates.value ||
				(isPredicate<T[keyof T]>(predicates.value)
					? predicates.value(value as T[keyof T])
					: value === predicates.value);

			if (keyMatches && valueMatches) {
				acc[key as keyof T] = value as T[keyof T];
			}
			return acc;
		},
		{} as Partial<T>,
	);
}
