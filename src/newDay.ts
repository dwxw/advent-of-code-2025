import { emptyDir } from "@std/fs";

async function newDay(day: number) {
  const dayDir = `src/day${day}`;
  await emptyDir(dayDir);

  await Deno.writeTextFile(
    `${dayDir}/day${day}.ts`,
    `export function day${day}(input: string[]) {
  return 0;
}

export function day${day}Part2(input: string[]) {
  return 0;
}
`,
  );

  await Deno.writeTextFile(
    `${dayDir}/day${day}.test.ts`,
    `import { expect } from "@std/expect";
import { day${day}, day${day}Part2 } from "./day${day}.ts";

const test = Deno.test;

test("example", () => {
  expect(day${day}([])).toBe(0);
});

test("example", () => {
  expect(day${day}Part2([])).toBe(0);
});
`,
  );

  await Deno.writeTextFile(
    `${dayDir}/index.ts`,
    `import { fetchInput } from "../fetchInput.ts";
import { day${day}, day${day}Part2 } from "./day${day}.ts";

if (import.meta.main) {
  const input = await fetchInput(${day});
  console.log("part 1", day${day}(input));
  console.log("part 2", day${day}Part2(input));
}
`,
  );
}

if (import.meta.main) {
  const today = new Date();
  const day = today.getDate();
  newDay(day);
}
