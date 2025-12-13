import { config } from "dotenv";

// Load environment variables from the .env file
const env = config();

export const fetchInput = async (day: number, splitOn: string = "\n") => {
  const response = await fetch(
    `https://adventofcode.com/2025/day/${day}/input`,
    {
      headers: {
        cookie: `session=${env.SESSION_COOKIE}`,
      },
    },
  );
  const raw = await response.text();
  return raw.trim().split(splitOn);
};

export const fetchInputNoSplit = async (day: number) => {
  const response = await fetch(
    `https://adventofcode.com/2025/day/${day}/input`,
    {
      headers: {
        cookie: `session=${env.SESSION_COOKIE}`,
      },
    },
  );
  const raw = await response.text();
  return raw.trim();
};

export const fetchInputNoTrim = async (day: number, splitOn: string = "\n") => {
  const response = await fetch(
    `https://adventofcode.com/2025/day/${day}/input`,
    {
      headers: {
        cookie: `session=${env.SESSION_COOKIE}`,
      },
    },
  );
  const raw = await response.text();
  return raw.split(splitOn);
};
