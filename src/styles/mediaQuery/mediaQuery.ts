type Media = "xs" | "sm" | "md" | "lg" | "xl";

type Breakpoints = {
  [T in Media]: number;
};

const breakpoints: Breakpoints = {
  xs: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1024,
};

/**
 * @example
 * ${mediaQueries("md")`
 *  background-color: green;
 *`};
 **/
export const mediaQuery = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
