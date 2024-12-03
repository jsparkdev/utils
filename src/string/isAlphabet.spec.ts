import { isAlphabetChar, isAlphabetString } from "./isAlphabet.js";
import { describe, it, expect } from "vitest";

describe("isAlphabetChar", () => {
  it("should return true for alphabet characters", () => {
    expect(isAlphabetChar("a")).toBe(true);
    expect(isAlphabetChar("Z")).toBe(true);
    expect(isAlphabetChar("m")).toBe(true);
  });

  it("should return false for non-alphabet characters", () => {
    expect(isAlphabetChar("1")).toBe(false);
    expect(isAlphabetChar("!")).toBe(false);
    expect(isAlphabetChar(" ")).toBe(false);
  });

  it("should return false for strings longer than one character", () => {
    expect(() => isAlphabetChar("ab")).toThrow();
    expect(() => isAlphabetChar("abc")).toThrow();
    expect(() => isAlphabetChar("abcdefghijklmnopqrstuvwxyz")).toThrow();
  });
});

describe("isAlphabetString", () => {
  it("should return true for strings containing only alphabet characters", () => {
    expect(isAlphabetString("abc")).toBe(true);
    expect(isAlphabetString("ABC")).toBe(true);
    expect(isAlphabetString("aBcDeF")).toBe(true);
  });

  it("should return false for strings containing non-alphabet characters", () => {
    expect(isAlphabetString("abc123")).toBe(false);
    expect(isAlphabetString("hello!")).toBe(false);
    expect(isAlphabetString("test space")).toBe(false);
  });

  it("should handle empty strings", () => {
    expect(isAlphabetString("")).toBe(true);
  });
});
