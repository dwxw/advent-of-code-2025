import { fetchInput } from "../fetchInput.ts";
import { day4, day4Part2 } from "./day4.ts";

if (import.meta.main) {
  const input = await fetchInput(4);
  console.log("part 1", day4(input));
  console.log("part 2", day4Part2(input));
}
