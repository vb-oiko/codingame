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

const sets: number[][] = [];

const isEqual = (arr1: number[], arr2: number[]): boolean => {
  return arr1.every((el, i) => el === arr2[i]);
};

const addUniqueSet = (newSet: number[]) => {
  for (let i = 0; i < sets.length; i++) {
    if (isEqual(sets[i], newSet)) {
      return;
    }
  }

  sets.push(newSet);
};

const change = (sum: number, set: number[]) => {
  console.error({ sum, set });

  if (sum === 0) {
    addUniqueSet(set);
  }

  coins.forEach((coin, i) => {
    if (coin <= sum) {
      const newSet = [...set];
      newSet[i] += 1;
      change(sum - coin, newSet);
    }
  });
};

change(N, new Array(S).fill(0));

console.error(sets);
console.log(sets.length);
