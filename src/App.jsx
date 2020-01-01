import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom'
import './style/global.scss';
import Home from './components/Home';
import Header from './components/Header';



function App() {
  return (
    < >
      <Header/>
      <BrowserRouter>
          <Route path="/" exact component={Home}/>
      </BrowserRouter>
    </>
  );
}

export default App;
