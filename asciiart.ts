/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 declare function readline(): string;

const rows: string[] = [];
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?".split("");

const L: number = parseInt(readline());
const H: number = parseInt(readline());
const T: string = readline();
for (let i = 0; i < H; i++) {
  rows[i] = readline();
}

const output = rows.map((row) => {
  const str = T.split("").map((char) => {
    const offset = ALPHABET.findIndex((a) => a === char.toUpperCase());
    if (offset >= 0) {
      return row.slice(offset * L, offset * L + L);
    }

    return row.slice((ALPHABET.length - 1) * L, (ALPHABET.length - 1) * L + L);
  });
  return str.join("");
});

output.forEach((element) => {
  console.log(element);
});
