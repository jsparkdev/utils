import { describe, it, expect } from "vitest";
import { insert } from "./insert.js";

describe("insert", () => {
  it("can insert numbers", () => {
    const numbers = [1, 2, 3];
    const result = insert(numbers, 1, 4);
    expect(result).toEqual([1, 4, 2, 3]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("can insert strings", () => {
    const strings = ["a", "b", "c"];
    const result = insert(strings, 1, "d");
    expect(result).toEqual(["a", "d", "b", "c"]);
    expect(strings).toEqual(["a", "b", "c"]);
  });

  it("can insert objects", () => {
    const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = insert(objects, 1, { id: 4 });
    expect(result).toEqual([{ id: 1 }, { id: 4 }, { id: 2 }, { id: 3 }]);
    expect(objects).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it("can't insert at negative index", () => {
    const numbers = [1, 2, 3];
    const result = insert(numbers, -1, 4);
    expect(result).toEqual([1, 2, 3]);
    expect(numbers).toEqual([1, 2, 3]);
  });

  it("can't insert past end", () => {
    const numbers = [1, 2, 3];
    const result = insert(numbers, 5, 4);
    expect(result).toEqual([1, 2, 3]);
    expect(numbers).toEqual([1, 2, 3]);
  });
});
