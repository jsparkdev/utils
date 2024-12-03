import { describe, it, expect } from "vitest";
import { insert } from "./insert.js";

describe("insert", () => {
  it("can insert numbers", () => {
    const numbers = [1, 2];
    const result = insert(numbers, 1, 3);
    expect(result).toEqual([1, 3, 2]);
    expect(numbers).toEqual([1, 2]);
  });

  it("can insert strings", () => {
    const strings = ["a", "b"];
    const result = insert(strings, 1, "c");
    expect(result).toEqual(["a", "c", "b"]);
    expect(strings).toEqual(["a", "b"]);
  });

  it("can insert objects", () => {
    const objects = [{ id: 1 }, { id: 2 }];
    const result = insert(objects, 1, { id: 3 });
    expect(result).toEqual([{ id: 1 }, { id: 3 }, { id: 2 }]);
    expect(objects).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("can't insert at negative index", () => {
    const numbers = [1, 2];
    const result = insert(numbers, -1, 3);
    expect(result).toEqual([1, 2]);
    expect(numbers).toEqual([1, 2]);
  });

  it("can't insert past end", () => {
    const numbers = [1, 2];
    const result = insert(numbers, 5, 3);
    expect(result).toEqual([1, 2]);
    expect(numbers).toEqual([1, 2]);
  });
});
