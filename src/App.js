import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from './components/Header/index'
import Home from './views/Home'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Home />
        <GlobalStyle />
      </div>
    </>
  );
}
export default App;
