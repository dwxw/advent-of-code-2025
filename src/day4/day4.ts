export function day4(input: string[]) {
  const grid = input.map((r) => r.split(""));
  let accessibleRolls = 0;
  if (grid.length === grid[0].length) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === ".") {
          continue;
        }
        const adjacent = countAdjacent([i, j], grid, grid.length);
        if (adjacent < 4) {
          accessibleRolls++;
        }
      }
    }
  }
  return accessibleRolls;
}

function countAdjacent(pos: number[], grid: string[][], size: number): number {
  const [i, j] = pos;
  let adjacentRolls = 0;
  if (i - 1 >= 0 && (grid[i - 1][j] === "@" || grid[i - 1][j] === "x")) { // N
    adjacentRolls++;
  }
  if (
    i - 1 >= 0 && j + 1 < size &&
    (grid[i - 1][j + 1] === "@" || grid[i - 1][j + 1] === "x")
  ) { // NE
    adjacentRolls++;
  }
  if (j + 1 < size && (grid[i][j + 1] === "@" || grid[i][j + 1] === "x")) { // E
    adjacentRolls++;
  }
  if (
    i + 1 < size && j + 1 < size &&
    (grid[i + 1][j + 1] === "@" || grid[i + 1][j + 1] === "x")
  ) { // SE
    adjacentRolls++;
  }
  if (i + 1 < size && (grid[i + 1][j] === "@" || grid[i + 1][j] === "x")) { // S
    adjacentRolls++;
  }
  if (
    i + 1 < size && j - 1 >= 0 &&
    (grid[i + 1][j - 1] === "@" || grid[i + 1][j - 1] === "x")
  ) { // SW
    adjacentRolls++;
  }
  if (j - 1 >= 0 && (grid[i][j - 1] === "@" || grid[i][j - 1] === "x")) { // W
    adjacentRolls++;
  }
  if (
    i - 1 >= 0 && j - 1 >= 0 &&
    (grid[i - 1][j - 1] === "@" || grid[i - 1][j - 1] === "x")
  ) { // NW
    adjacentRolls++;
  }
  return adjacentRolls;
}

export function day4Part2(input: string[]) {
  const grid = input.map((r) => r.split(""));
  let removedRolls = 0;
  if (grid.length === grid[0].length) {
    let rolls = 0;
    do {
      rolls = rollsToRemove(grid);
      removeRolls(grid);
      removedRolls += rolls;
    } while (rolls > 0);
  }
  return removedRolls;
}

function rollsToRemove(grid: string[][]): number {
  let removedRolls = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === ".") {
        continue;
      }
      const adjacent = countAdjacent([i, j], grid, grid.length);
      if (adjacent < 4) {
        grid[i][j] = "x";
        removedRolls++;
      }
    }
  }
  return removedRolls;
}

function removeRolls(grid: string[][]) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "x") {
        grid[i][j] = ".";
      }
    }
  }
}
