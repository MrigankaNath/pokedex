
import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "Charmander Bulbasaur PIKACHU",
    expected: ["charmander", "bulbasaur", "pikachu"],
  },
  {
    input: "   ",
    expected: [""], // Edge case check: what happens with pure whitespace
  }
  ])("cleanInput('%s')", ({ input, expected }) => {
  test(`Expected: ${JSON.stringify(expected)}`, () => {
    // 1. Call your actual cleanInput function with the test input
    const actual = cleanInput(input);

    // 2. Verify the array length matches what we expect
    expect(actual).toHaveLength(expected.length);

    // 3. Loop through every word to ensure it is lowercased and matched perfectly
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
