export function day3(input: string[]) {
  let joltage = 0;
  for (const bank of input) {
    for (let j = 99; j > 10; j--) {
      const [left, right] = j.toString().split("");
      const leftIdx = bank.indexOf(left);
      const rightIdx = bank.indexOf(right, leftIdx + 1);
      if (leftIdx !== -1 && rightIdx !== -1 && leftIdx < rightIdx) {
        joltage += j;
        break;
      }
    }
  }
  return joltage;
}

export function day3Part2(input: string[]) {
  let joltage = 0;
  for (const bank of input) {
    // eliminate a digit in each place, find largest number, repeat until enough digits left
    let result = bank;
    while (result.length > 12) {
      result = eliminateBattery(result);
    }
    joltage += parseInt(result);
  }
  return joltage;
}

function eliminateBattery(bank: string): string {
  return bank.split("").reduce((result, b, i, bank) => {
    const candidate = BigInt(bank.toSpliced(i, 1).join(""));
    return result > candidate ? result : candidate;
  }, BigInt(0)).toString();
}
