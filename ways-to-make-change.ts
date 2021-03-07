/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

declare function readline(): string;

const coins: number[] = [];

const N: number = parseInt(readline());
const S: number = parseInt(readline());
var inputs: string[] = readline().split(" ");
for (let i = 0; i < S; i++) {
  coins[i] = parseInt(inputs[i]);
}

const cache: Record<string, number> = {};

const change = (sum: number, set: number[]): number => {
  if (sum === 0) {
    return 1;
  }

  const key = JSON.stringify({ sum, set });
  if (cache[key] !== undefined) {
    return cache[key];
  }

  if (set.length === 1) {
    const isDividable = sum % set[0] === 0 ? 1 : 0;
    cache[key] = isDividable;
    return isDividable;
  }

  const [largest, ...smallerSet] = set;

  const remainder = sum % largest;
  let count = 0;

  for (let i = 0; i <= sum; i += largest) {
    count += change(sum - i, smallerSet);
  }

  cache[key] = count;

  return count;
};

coins.sort((a, b) => b - a);

console.log(change(N, coins));
