// Necessary to access index using bracket notation
const colors = [
  "primary",
  "secondary",
  "black",
  "white",
  "lightGray",
  "medium"
] as const;

export type ColorsType = typeof colors[number];

export const COLORS: Record<ColorsType, string> = {
  primary: "#fc5c65", // salmon-ish
  secondary: "#4ECDC4", // mint green
  black: "#000",
  white: "#fff",
  lightGray: "#f8f4f4",
  medium: "#6e6969"
};
