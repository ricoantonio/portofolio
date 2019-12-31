import React from 'react';
import logo from '../../logo.svg';
import {Route,BrowserRouter} from 'react-router-dom'

import Home from '../Home';


function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Home}/>
    </BrowserRouter>
  );
}

export default App;
