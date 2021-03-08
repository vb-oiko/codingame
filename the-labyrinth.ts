/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
declare function readline(): string;

var inputs: string[] = readline().split(" ");
const R: number = parseInt(inputs[0]); // number of rows.
const C: number = parseInt(inputs[1]); // number of columns.
const A: number = parseInt(inputs[2]); // number of rounds between the time the alarm countdown is activated and the time the alarm goes off.

const maze: string[][] = [];

type Direction = "RIGHT" | "LEFT" | "UP" | "DOWN";

const RIGHT: Direction = "RIGHT";
const LEFT: Direction = "LEFT";
const UP: Direction = "UP";
const DOWN: Direction = "DOWN";

const isNextCellEmpty = (
  KR: number,
  RC: number,
  direction: Direction
): boolean => {
  if (direction === RIGHT) {
    return maze[KR][RC + 1] !== "#";
  }

  if (direction === LEFT) {
    return maze[KR][RC - 1] !== "#";
  }
  if (direction === DOWN) {
    return maze[KR + 1][RC] !== "#";
  }

  if (direction === UP) {
    return maze[KR - 1][RC] !== "#";
  }
};

// game loop
while (true) {
  var inputs: string[] = readline().split(" ");
  const KR: number = parseInt(inputs[0]); // row where Kirk is located.
  const KC: number = parseInt(inputs[1]); // column where Kirk is located.
  for (let i = 0; i < R; i++) {
    maze[i] = readline().split(""); // C of the characters in '#.TC?' (i.e. one line of the ASCII maze).
  }

  if (isNextCellEmpty(KR, KC, RIGHT)) {
    console.log(RIGHT);
  } else if (isNextCellEmpty(KR, KC, DOWN)) {
    console.log(DOWN);
  } else if (isNextCellEmpty(KR, KC, LEFT)) {
    console.log(LEFT);
  } else if (isNextCellEmpty(KR, KC, UP)) {
    console.log(UP);
  }
}
