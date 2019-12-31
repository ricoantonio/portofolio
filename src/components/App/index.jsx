import React from 'react';
import logo from '../../logo.svg';
import {Route,BrowserRouter} from 'react-router-dom'
import '../../style/global.scss';

import Home from '../Home';
import Header from '../Header';


function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
        <Route path="/" exact component={Home}/>
    </BrowserRouter>
    </>
  );
}

export default App;
