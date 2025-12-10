import { fetchInput } from "../fetchInput.ts";
import { day3, day3Part2 } from "./day3.ts";

if (import.meta.main) {
  const input = await fetchInput(3);
  console.log("part 1", day3(input));
  console.log("part 2", day3Part2(input));
}
