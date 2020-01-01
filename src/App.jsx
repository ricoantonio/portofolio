import React, { Component } from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import './style/global.scss';
import Home from './components/Home';
import Header from './components/Header';

export class App extends Component {
  state={
    mouseX:0,
    mouseY:0
  }

  render() {
    return (
      <>
        <div onMouseMove={(e)=>{this.setState({
          mouseX:e.screenX,
          mouseY:e.screenY
        })}}>
          <Header/>
          <Home/>
          <h1>{this.state.mouseX}</h1>
          <h1>{this.state.mouseY}</h1>
          
          
          
        </div>
      </>
    )
  }
}

export default App;
