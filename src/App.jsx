import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom'
import './style/global.scss';
import Home from './components/Home';
import Header from './components/Header';



function App() {
  return (
    < >
      <Header/>
      <Home/>
    </>
  );
}

export default App;
