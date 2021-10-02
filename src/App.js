import React from 'react';
//components
import Header from './components/Header';
import Home from './components/Home';

//styles
import { GlobalStyle } from './style/GlobalStyle';



//we can either use the functions for creating the components or arrow functions
const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
