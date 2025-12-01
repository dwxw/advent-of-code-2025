export function day1(input: string[]) {
  const rotations: [string, number][] = input.map((
    v,
  ) => [v[0], parseInt(v.slice(1))]);
  let dial = 50;
  let zeros = 0;
  rotations.forEach(([direction, distance]) => {
    if (direction === "L") {
      dial -= distance;
    } else if (direction === "R") {
      dial += distance;
    }
    dial %= 100;
    if (dial === 0) {
      zeros++;
    }
  });
  return zeros;
}

export function day1Part2(input: string[]) {
  const rotations: [string, number][] = input.map((
    v,
  ) => [v[0], parseInt(v.slice(1))]);
  let dial = 50;
  let zeros = 0;
  rotations.forEach(([direction, distance]) => {
    if (direction === "L") {
      if (dial && (dial - distance) < 0) {
        const r = ((distance) / 100) + 1;
        const r1 = Math.floor(r);
        const r2 = Math.abs(r1);
        zeros += r2;
      }
      dial -= distance;
    } else if (direction === "R") {
      if (dial && (dial + distance) > 100) {
        zeros += Math.abs(Math.floor((distance) / 100)) + 1;
      }
      dial += distance;
    }
    dial = ((dial % 100) + 100) % 100;
    if (dial === 0) {
      zeros++;
    }
  });
  return zeros;
}
