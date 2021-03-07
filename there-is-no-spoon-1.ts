/**
 * Don't let the machines win. You are humanity's last hope...
 **/
declare function readline(): string;

const lines = <string[]>[];

const width: number = parseInt(readline()); // the number of cells on the X axis
const height: number = parseInt(readline()); // the number of cells on the Y axis
for (let i = 0; i < height; i++) {
  lines[i] = readline(); // width characters, each either 0 or .
}

const nodes = lines.map((line) => line.split(""));

const getRightNeighbor = (x: number, y: number): number[] => {
  for (let i = x + 1; i < width; i++) {
    if (nodes[y][i] === "0") {
      return [i, y];
    }
  }
  return [-1, -1];
};

const getBottomNeighbor = (x: number, y: number): number[] => {
  for (let i = y + 1; i < height; i++) {
    if (nodes[i][x] === "0") {
      return [x, i];
    }
  }
  return [-1, -1];
};

nodes.forEach((line, j) => {
  line.forEach((node, i) => {
    if (nodes[j][i] === "0") {
      console.log(
        [i, j, ...getRightNeighbor(i, j), ...getBottomNeighbor(i, j)].join(" ")
      );
    }
  });
});
