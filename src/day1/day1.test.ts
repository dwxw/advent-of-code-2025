import { expect } from "@std/expect";
import { day1, day1Part2 } from "./day1.ts";

const test = Deno.test;

test("example", () => {
  expect(day1([
    "L68",
    "L30",
    "R48",
    "L5",
    "R60",
    "L55",
    "L1",
    "L99",
    "R14",
    "L82",
  ])).toBe(3);
});

test("example", () => {
  expect(day1Part2([
    "L68",
    "L30",
    "R48",
    "L5",
    "R60",
    "L55",
    "L1",
    "L99",
    "R14",
    "L82",
  ])).toBe(6);
});

test("example long", () => {
  expect(day1Part2([
    "L168",
    "R200",
  ])).toBe(4);
});
