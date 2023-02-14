import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { colors } from "./Assets/Colors";
import { DateContextProvider } from "./Contexts/DateContext";
import { DisplayContextProvider } from "./Contexts/DisplayContext";
import { GlobalStyle } from "./style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <ThemeProvider theme={{ colors }}>
        <DisplayContextProvider>
          <DateContextProvider>
            <GlobalStyle />
            <App />
          </DateContextProvider>
        </DisplayContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  </>
);
