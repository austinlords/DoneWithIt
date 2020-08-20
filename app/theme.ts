// Necessary to access index using bracket notation
const colors = [
  "primary",
  "secondary",
  "black",
  "white",
  "lightGray",
  "medium",
  "danger",
  "lightDanger",
  "yellow",
  "dark"
] as const;

export type ColorsType = typeof colors[number];

export const COLORS: Record<ColorsType, string> = {
  primary: "#fc5c65", // salmon-ish
  secondary: "#4ECDC4", // mint green
  black: "#000",
  white: "#fff",
  lightGray: "#f8f4f4",
  medium: "#6e6969",
  danger: "#ff5252",
  lightDanger: "#ff8888",
  yellow: "#ffe66d",
  dark: "#0c0c0c"
};

export enum Colors {
  primary = "#fc5c65", // salmon-ish
  secondary = "#4ECDC4", // mint green
  black = "#000",
  white = "#fff",
  lightGray = "#f8f4f4",
  medium = "#6e6969",
  danger = "#ff5252",
  lightDanger = "#ff8888"
}
