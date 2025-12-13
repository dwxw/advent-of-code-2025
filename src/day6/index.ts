import { fetchInputNoTrim } from "../fetchInput.ts";
import { day6, day6Part2 } from "./day6.ts";

if (import.meta.main) {
  const input = await fetchInputNoTrim(6);
  console.log("part 1", day6(input));
  console.log("part 2", day6Part2(input));
}
