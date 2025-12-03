import { fetchInput } from "../fetchInput.ts";
import { day2, day2Part2 } from "./day2.ts";

if (import.meta.main) {
  const input = await fetchInput(2, ",");
  console.log("part 1", day2(input));
  console.log("part 2", day2Part2(input));
}
