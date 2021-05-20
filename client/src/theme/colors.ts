export const ColorTypes = [
  "primary",
  "red",
  "green",
  "blue",
  "yellow",
  "violet",
  "white",
  "black",
  "grey1",
  "grey2",
  "grey3",
  "grey4",
  "pink",
  "darkPink",
];

export type ColorType = typeof ColorTypes[number];

export type Colors = Record<ColorType, string>;

export const colors: Colors = {
  primary: "#f5008b",
  red: "#f64971",
  green: "#00df8d",
  blue: "#007aff",
  yellow: "#ffa801",
  violet: "#221850",
  white: "#fff",
  black: "#000",
  grey1: "#f4f3f6",
  grey2: "#dad8e2",
  grey3: "#aeaabf",
  grey4: "#777093",
  pink: "#f5008b",
  darkPink: "#dc037e",
};
