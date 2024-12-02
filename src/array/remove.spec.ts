import { describe, it, expect } from "vitest";
import { remove, removed } from "./remove.js";

describe("remove", () => {
  it("can remove numbers", () => {
    const numbers = [1, 2];
    remove(numbers, 1);
    expect(numbers).toEqual([1]);
  });

  it("can remove strings", () => {
    const strings = ["a", "b"];
    remove(strings, 1);
    expect(strings).toEqual(["a"]);
  });

  it("can remove objects", () => {
    const objects = [{ id: 1 }, { id: 2 }];
    remove(objects, 1);
    expect(objects).toEqual([{ id: 1 }]);
  });

  it("can't remove at negative index", () => {
    const numbers = [1, 2];
    remove(numbers, -1);
    expect(numbers).toEqual([1, 2]);
  });

  it("can't remove past end", () => {
    const numbers = [1, 2];
    remove(numbers, 5);
    expect(numbers).toEqual([1, 2]);
  });
});

describe("removed", () => {
  it("can remove numbers", () => {
    const numbers = [1, 2];
    const result = removed(numbers, 1);
    expect(result).toEqual([1]);
    expect(numbers).toEqual([1, 2]);
  });

  it("can remove strings", () => {
    const strings = ["a", "b"];
    const result = removed(strings, 1);
    expect(result).toEqual(["a"]);
    expect(strings).toEqual(["a", "b"]);
  });

  it("can remove objects", () => {
    const objects = [{ id: 1 }, { id: 2 }];
    const result = removed(objects, 1);
    expect(result).toEqual([{ id: 1 }]);
    expect(objects).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("can't remove at negative index", () => {
    const numbers = [1, 2];
    const result = removed(numbers, -1);
    expect(result).toEqual([1, 2]);
    expect(numbers).toEqual([1, 2]);
  });

  it("can't remove past end", () => {
    const numbers = [1, 2];
    const result = removed(numbers, 5);
    expect(result).toEqual([1, 2]);
    expect(numbers).toEqual([1, 2]);
  });
});