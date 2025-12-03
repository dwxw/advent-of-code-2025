export function day2(input: string[]) {
  let result = 0;
  input.forEach((idRange) => {
    const [firstId, lastId] = idRange.split("-");
    // console.log(firstId, lastId);
    let id = parseInt(firstId);
    const end = parseInt(lastId);
    while (id <= end) {
      if (isInvalid(id)) {
        result += id;
      }
      id++;
    }
  });
  return result;
}

function isInvalid(id: number): boolean {
  const input = id.toString();

  if (input.length % 2 > 0) {
    return false;
  }

  if (
    input.slice(0, input.length / 2) ===
      input.slice(input.length / 2)
  ) {
    return true;
  }
  return false;
}

export function day2Part2(input: string[]) {
  let result = 0;
  input.forEach((idRange) => {
    const [firstId, lastId] = idRange.split("-");
    // console.log(firstId, lastId);
    let id = parseInt(firstId);
    const end = parseInt(lastId);
    while (id <= end) {
      // console.log(`${id} ${isInvalidPart2(id)}`);
      if (isInvalidPart2(id)) {
        result += id;
      }
      id++;
    }
  });
  return result;
}

function isInvalidPart2(id: number): boolean {
  const input = id.toString(10);

  // length
  // 2 at the other end
  let i = input.length;
  while (i >= 2) {
    if (input.length % i === 0) { // divides nicely
      const slen = input.length / i;
      if (isInvalidPart2Inner(input, slen)) {
        return true;
      }
    }
    i--;
  }

  return false;
}

function isInvalidPart2Inner(input: string, slen: number): boolean {
  let j = slen;
  const test = input.slice(0, slen);
  while (j <= input.length - slen) {
    const search = input.slice(j, j + slen);
    if (test !== search) {
      return false;
    }
    j += slen;
  }
  return true;
}
