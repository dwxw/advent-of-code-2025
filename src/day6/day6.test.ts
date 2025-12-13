import { expect } from "@std/expect";
import { day6, day6Part2 } from "./day6.ts";

const test = Deno.test;

test("example", () => {
  expect(day6([
    "123 328  51 64",
    "45 64  387 23",
    "6 98  215 314",
    "*   +   *   +",
  ])).toBe(4277556);
});

test("example", () => {
  expect(day6Part2([
    "123 328  51 64 ",
    " 45 64  387 23 ",
    "  6 98  215 314",
    "*   +   *   +  ",
  ])).toBe(3263827);
});
