import { expect } from "@std/expect";
import { day1 } from "./day1.ts";

Deno.test("example", () => {
  expect(day1(["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"])).toBe(11);
});
