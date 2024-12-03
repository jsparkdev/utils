import { filter } from "./filter.js";
import { describe, expect, it } from "vitest";

describe("filter", () => {
  it("should filter object by key", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(filter(obj, { key: "a" })).toEqual({ a: 1 });
  });

  it("should filter object by value", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(filter(obj, { value: 2 })).toEqual({ b: 2 });
  });

  it("should filter using predicates", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(
      filter(obj, {
        key: (k) => k === "a" || k === "b",
        value: (v) => v > 1,
      })
    ).toEqual({ b: 2 });
  });

  it("should return empty object when no elements match", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(filter(obj, { value: (v) => v > 10 })).toEqual({});
  });

  it("should handle empty object", () => {
    const obj = {};
    expect(filter(obj, { key: "a" })).toEqual({});
  });

  it("should return input object when predicates is empty", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(filter(obj, {})).toEqual(obj);
  });
});
