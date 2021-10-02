import React from 'react';
//components
import Header from './components/Header';

//styles
import { GlobalStyle } from './style/GlobalStyle';



//we can either use the functions for creating the components or arrow functions
const App = () => {
  return (
    <div className="App">
      <Header />
      Start here.
      <GlobalStyle />
    </div>
  );
}

export default App;
