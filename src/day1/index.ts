import { fetchInput } from "../fetchInput.ts";
import { day1, day1Part2 } from "./day1.ts";

if (import.meta.main) {
  const input = await fetchInput(1);
  console.log("part 1", day1(input));
  console.log("part 2", day1Part2(input));
}
