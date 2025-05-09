import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./app";

import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
