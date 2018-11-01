import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Typewriter from './Typewriter';

const App = () => (
  <div className="App">
    <Typewriter message={'HAPPY BIRTHDAY !\n'} />
    <GlobalStyle />
  </div>
);

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise');

  body {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    font-family: 'Waiting for the Sunrise', cursive, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #c7f9d4;
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export default App;
