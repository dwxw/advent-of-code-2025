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
    // rotations
    while (distance > 100) {
      zeros += 1;
      distance -= 100;
    }
    if (direction === "L") {
      // cross zero
      if (dial && (dial - distance < 0)) {
        zeros += 1;
      }
      dial -= distance;
    } else if (direction === "R") {
      // cross zero
      if ((dial + distance > 100)) {
        zeros += 1;
      }
      dial += distance;
    }
    // resting on zero
    dial = ((dial % 100) + 100) % 100;
    if (dial === 0) {
      zeros++;
    }
  });
  return zeros;
}
