type Range = { start: number; end: number };

export function day5(input: string[]) {
  // build the set of valid ids
  let i = 0;
  const freshIds: Range[] = [];
  while (input[i] !== "") {
    const [start, end] = input[i].split("-").map(Number);
    freshIds.push({ start, end });
    i++;
  }
  i++; // skip blank line
  // check each id if in set
  let result = 0;
  while (i < input.length) {
    if (isFresh(Number(input[i]), freshIds)) {
      result++;
    }
    i++;
  }
  return result;
}

function isFresh(id: number, freshIds: Range[]): boolean {
  for (const freshId of freshIds) {
    if (id >= freshId.start && id <= freshId.end) {
      return true;
    }
  }
  return false;
}

export function day5Part2(input: string[]) {
  // build the set of valid ids
  let i = 0;
  const freshIds: Range[] = [];
  while (input[i] !== "") {
    const [start, end] = input[i].split("-").map(Number);
    freshIds.push({ start, end });
    i++;
  }

  // remove overrlapping ranges
  freshIds.sort((a, b) => a.start - b.start);
  const nonOverrlappingRanges = freshIds
    .reduce((result, v) => {
      // try to extend an existing range
      let added = false;
      for (const r of result) {
        if (v.start >= r.start && v.start <= r.end) {
          r.start = Math.min(r.start, v.start);
          r.end = Math.max(r.end, v.end);
          added = true;
          break;
        }
      }
      if (!added) {
        result.push(v);
      }
      return result;
    }, [] as Range[]);

  // total ids
  const idCount = nonOverrlappingRanges.reduce((result, v) => {
    result += v.end - v.start + 1;
    return result;
  }, 0);

  return idCount;
}
