import React, { ReactNode } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { grey, lime } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function RootMuiTheme({ children }: { children: ReactNode }) {
  const rootMuiTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#0091ea",
        light: "#64c1ff",
        dark: "#0064b7",
      },
      secondary: {
        main: "#3d5afe",
        light: "#8187ff",
        dark: "#0031ca",
      },
    },
  });
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
    },
  }));
  const classes = useStyles();

  return (
    <ThemeProvider theme={rootMuiTheme}>
      <CssBaseline />
      <div className={classes.root}>{children}</div>
    </ThemeProvider>
  );
}
