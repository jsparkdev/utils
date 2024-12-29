import { map } from "./map.js";
import { describe, it, expect } from "vitest";

describe("map", () => {
	it("should transform an object's values using the provided callback", () => {
		const obj = { name: "John", age: 30 };
		const result = map(obj, ({ key, value }) => `${key}_${value}`);
		expect(result).toEqual({ name: "name_John", age: "age_30" });
	});

	it("should handle empty objects", () => {
		const empty = {};
		const result = map(empty, ({ key, value }) => `${key}_${value}`);
		expect(result).toEqual({});
	});

	it("should handle objects with multiple properties", () => {
		const user = {
			id: 1,
			name: "John",
			age: 30,
			email: "john@test.com",
		};
		const result = map(user, ({ value }) => String(value).toUpperCase());
		expect(result).toEqual({
			id: "1",
			name: "JOHN",
			age: "30",
			email: "JOHN@TEST.COM",
		});
	});

	it("should handle objects with nested properties", () => {
		const user = {
			id: 1,
			details: {
				name: "John",
				age: 30,
			},
		};
		const result = map(user, ({ key, value }) => JSON.stringify(value));
		expect(result).toEqual({
			id: "1",
			details: '{"name":"John","age":30}',
		});
	});

	it("should handle objects with different value types", () => {
		const mixed = {
			string: "hello",
			number: 42,
			boolean: true,
			array: [1, 2, 3],
			null: null,
		};
		const result = map(mixed, ({ value }) => typeof value);
		expect(result).toEqual({
			string: "string",
			number: "number",
			boolean: "boolean",
			array: "object",
			null: "object",
		});
	});

	it("should transform only specific properties based on a condition", () => {
		const product = {
			name: "laptop",
			price: "999",
			category: "electronics",
			description: "high-end laptop",
		};
		const result = map(product, ({ key, value }) => {
			if (key === "name") {
				return value.toUpperCase();
			}
			return value;
		});
		expect(result).toEqual({
			name: "LAPTOP",
			price: "999",
			category: "electronics",
			description: "high-end laptop",
		});
	});
});
