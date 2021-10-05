import React from 'react';
//components
import Header from './components/Header';
import Home from './components/Home';
import Movie from "./components/Movie";
import NotFound from './components/NotFound';


//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//styles
import { GlobalStyle } from './style/GlobalStyle';



//we can either use the functions for creating the components or arrow functions
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />


      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
