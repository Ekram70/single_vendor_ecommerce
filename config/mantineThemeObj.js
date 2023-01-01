const mantineThemeObj = {
  activeStyles: { transform: "scale(0.95)" },
  black: "#2D2D2D",
  colors: {
    brand: [
      "#f0debc",
      "#edd19c",
      "#edc67e",
      "#edc67e",
      "#f0b13d",
      "#f7ac22",
      "#ffa600", //background color
      "#dd9208", //hover color
      "#ffa600", //dark background color
      "#dd9208", //dark hover color
    ],
  },
  components: {
    Anchor: {
      classNames: {
        root: "text-sm font-semibold",
      },
    },
  },
  cursorType: "pointer",
  defaultGradient: {
    from: "orange",
    to: "yellow",
    deg: 45,
  },
  fontFamily: "Noto Sans, sans-serif",
  loader: "dots",
  primaryColor: "brand",
};

export default mantineThemeObj;
