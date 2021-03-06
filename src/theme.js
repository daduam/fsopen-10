import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292E",
    textSecondary: "#586069",
    primary: "#0366D6",
    appBar: "#24292E",
    mainBg: "#E1E4E8",
    error: "#D73A4A",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
