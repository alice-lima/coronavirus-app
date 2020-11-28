import React from "react";
import { Provider } from "react-redux";
import "../config/ReactotronConfig";
import store from "../store";
import Routes from "../routes";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
