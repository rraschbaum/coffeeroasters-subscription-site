export const COLORS = {
  teal: "179deg 81% 29%",
  aqua: "179deg 55% 61%",
  peach: "25deg 94% 86%",
  cream: "43deg 78% 98%",
  white: "0deg 0% 100%",
  gray: {
    100: "40deg 29% 94%",
    200: "26deg 11% 87%",
    300: "215deg 5% 54%",
    400: "215deg 19% 25%",
  },
};

export const WEIGHTS = {
  regular: 400,
  bold: 700,
  black: 900,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1000,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  tabletOnly: `(max-width: ${BREAKPOINTS.tablet / 16}rem) 
    and (min-width: ${BREAKPOINTS.phone / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
