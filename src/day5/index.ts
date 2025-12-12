import { fetchInput } from "../fetchInput.ts";
import { day5, day5Part2 } from "./day5.ts";

if (import.meta.main) {
  const input = await fetchInput(5);
  console.log("part 1", day5(input));
  console.log("part 2", day5Part2(input));
}
