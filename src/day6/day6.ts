export function day6(input: string[]) {
  const problems: string[][] = input.map((line) => line.split(/\s+/));
  const transposed = problems[0].map((_, colIndex) =>
    problems.map((row) => row[colIndex])
  );

  const calculated = transposed.map((p) => {
    const operand = p.slice(-1)[0];
    const args = p.slice(0, -1);
    if (operand === "+") {
      return args.reduce((r, v) => r + Number(v), 0);
    } else if (operand === "*") {
      return args.reduce((r, v) => r * Number(v), 1);
    }
    return 0;
  });

  return calculated.reduce((r, v) => r + v);
}

export function day6Part2(input: string[]) {
  const problems: string[][] = input.map((line) => line.split("")).slice(0, -1);
  // console.table(problems);
  for (const row of problems) {
    console.log(problems.length, row.length);
  }

  const transposed = problems[0].map((_, colIndex) =>
    problems.map((row) => row[colIndex])
  );
  // console.table(transposed);

  const p = transposed.reduce((r, v) => {
    if (v.every((x) => x === " ")) {
      r.push([]);
      return r;
    }
    const operand = v.slice(-1)[0].trim();
    if (operand !== "") {
      r[r.length - 1].unshift(operand);
    }
    const val = v.slice(0, -1).join("").trim();
    r[r.length - 1].push(val);
    return r;
  }, [[]] as string[][]);
  console.log(p);

  const calculated = p.map((p) => {
    const operand = p[0][0];
    const args = p.slice(1);
    // console.log(operand, args);
    if (operand === "+") {
      return args.reduce((r, v) => r + Number(v), 0);
    } else if (operand === "*") {
      return args.reduce((r, v) => r * Number(v), 1);
    }
    return 0;
  });

  return calculated.reduce((r, v) => r + v);
}
