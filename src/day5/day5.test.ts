import { expect } from "@std/expect";
import { day5, day5Part2 } from "./day5.ts";

const test = Deno.test;

test("example", () => {
  expect(day5([
    "3-5",
    "10-14",
    "16-20",
    "12-18",
    "",
    "1",
    "5",
    "8",
    "11",
    "17",
    "32",
  ])).toBe(3);
});

test("example", () => {
  expect(day5Part2([
    "3-5",
    "10-14",
    "16-20",
    "12-18",
    "",
    "1",
    "5",
    "8",
    "11",
    "17",
    "32",
  ])).toBe(14);
});
