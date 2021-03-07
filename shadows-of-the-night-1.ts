/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
declare function readline(): string;

var inputs: string[] = readline().split(" ");
const W: number = parseInt(inputs[0]); // width of the building.
const H: number = parseInt(inputs[1]); // height of the building.
const N: number = parseInt(readline()); // maximum number of turns before game over.
var inputs: string[] = readline().split(" ");
const X0: number = parseInt(inputs[0]);
const Y0: number = parseInt(inputs[1]);

const current = {
  x: X0,
  y: Y0,
};

const left = {
  x: 0,
  y: 0,
};

const right = {
  x: W - 1,
  y: H - 1,
};

// game loop
while (true) {
  const bombDir: string = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

  if (bombDir.includes("U")) {
    right.y = current.y;
    current.y = Math.floor((left.y + current.y) / 2);
  }

  if (bombDir.includes("D")) {
    left.y = current.y;
    current.y = Math.round((right.y + current.y) / 2);
  }

  if (bombDir.includes("L")) {
    right.x = current.x;
    current.x = Math.floor((left.x + current.x) / 2);
  }

  if (bombDir.includes("R")) {
    left.x = current.x;
    current.x = Math.round((right.x + current.x) / 2);
  }

  console.log(`${current.x} ${current.y}`);
}
