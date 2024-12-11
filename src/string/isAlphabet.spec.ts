import { isAlphabetChar, isAlphabetString } from "./isAlphabet.js";
import { describe, it, expect } from "vitest";

describe("isAlphabetChar", () => {
  it("should return true for lowercase alphabet characters", () => {
    expect(isAlphabetChar("a")).toBe(true);
  });

  it("should return true for uppercase alphabet characters", () => {
    expect(isAlphabetChar("A")).toBe(true);
  });

  it("should return false for numeric characters", () => {
    expect(isAlphabetChar("0")).toBe(false);
    expect(isAlphabetChar("9")).toBe(false);
  });

  it("should return false for special characters", () => {
    expect(isAlphabetChar("!")).toBe(false);
    expect(isAlphabetChar("@")).toBe(false);
    expect(isAlphabetChar("#")).toBe(false);
  });

  it("should return false for spaces", () => {
    expect(isAlphabetChar("")).toBe(false);
    expect(isAlphabetChar(" ")).toBe(false);
    expect(isAlphabetChar("\t")).toBe(false);
    expect(isAlphabetChar("\r")).toBe(false);
    expect(isAlphabetChar("\n")).toBe(false);
  });

  it("should throw error for strings longer than one character", () => {
    expect(() => isAlphabetChar("ab")).toThrow();
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
    expect(isAlphabetString("123")).toBe(false);
    expect(isAlphabetString("@#$%")).toBe(false);
    expect(isAlphabetString("a1b2c3")).toBe(false);
  });

  it("should return false for spaces", () => {
    expect(isAlphabetString("")).toBe(false);
    expect(isAlphabetString(" ")).toBe(false);
    expect(isAlphabetString("   ")).toBe(false);
    expect(isAlphabetString("\t")).toBe(false);
    expect(isAlphabetString("\r")).toBe(false);
    expect(isAlphabetString("\n")).toBe(false);
  });

  it("should handle single characters", () => {
    expect(isAlphabetString("a")).toBe(true);
    expect(isAlphabetString("Z")).toBe(true);
    expect(isAlphabetString("1")).toBe(false);
    expect(isAlphabetString("!")).toBe(false);
  });
});
