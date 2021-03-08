/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

declare function readline(): string;

const lines: string[] = [];

const N: number = parseInt(readline());
for (let i = 0; i < N; i++) {
  lines[i] = readline();
}

const src = lines.join("");

const indent = (str: string, level: number): string => {
  const margin = new Array(level).fill("    ");
  return `${margin}${str}`;
};

const BLOCK: ELEMENT = "BLOCK";
const KEY_VALUE: ELEMENT = "KEY_VALUE";
const PRIMITIVE_TYPE: ELEMENT = "PRIMITIVE_TYPE";

type ELEMENT = "BLOCK" | "PRIMITIVE_TYPE" | "KEY_VALUE";
interface BaseNode {
  token: ELEMENT;
  nodes: NODE[];
}

interface KeyValueNode extends BaseNode {
  token: Extract<ELEMENT, "KEY_VALUE">;
  key: string;
}

const tests = [
  { token: BLOCK, regex: /^\W+\((.+)\)\W+$/gm },
  { token: KEY_VALUE, regex: /^\W+(('.+?')\w*=(\w*\(.+\)|'.+?'))\W+$/gm },
  { token: PRIMITIVE_TYPE, regex: /^\W+('.+?'|\d+|true|false|null)\W+$/gm },
];

type NODE = BaseNode | KeyValueNode;

const parse = (str: string): NODE => {
  for (const test of tests) {
    const res = test.regex.exec(str);
    if (res !== null) {
      return {
        token: test.token,
        ...(test.token === KEY_VALUE
          ? { key: res[1], nodes: res[2].split(";").map(parse) }
          : { nodes: res[1].split(";").map(parse) }),
      };
    }
  }

  throw new Error("parsing failed");
};
