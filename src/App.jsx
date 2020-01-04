import React, { Component } from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import './style/global.scss';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';


export class App extends Component {

  
  render() {
    return (
      <>
          <Header/>
          <Home/>
          <Footer/>
      </>
    )
  }
}

export default App;
