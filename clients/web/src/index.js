import React from "react";
import ReactDOM from "react-dom";
import {CssBaseline} from "@material-ui/core";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {blue} from "@material-ui/core/colors";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
