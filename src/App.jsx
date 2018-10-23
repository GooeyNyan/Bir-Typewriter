import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Typewriter from './Typewriter';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #c7f9d4;
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const App = () => (
  <div className="App">
    <Typewriter />
    <GlobalStyle />
  </div>
);

export default App;
