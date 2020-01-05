import React, { Component } from 'react'
import './style.scss'

export class Home extends Component {

    state={
        mouseX:0,
        mouseY:0,
        objectArray:new Array(),
        done:false
    }
    
    componentDidMount() {
        
        // this.positionDivs()
        // this.moveDiv(this.state.mouseX)
        // this.moveDiv(this.state.mouseX)
        this.setState({done:true})
        
        
    }
    // fillObjectArray(){
    //     var oneDiv = this.one
    //     var oneX = 312; //position div from half width of the page
    //     var oneY = 33;
    //     var oneFactor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
    //     var oneArray = new Array();
    //     oneArray.push(oneDiv, oneX, oneY, oneFactor);
    //     this.state.objectArray.push(oneArray);
    // }
    render() {
        return (
            <>
                {this.state.done?
                    <div 
                    style={{height:"640px"}}
                    onMouseMove={(e)=>{this.setState({
                        mouseX:e.screenX,
                        mouseY:e.screenY
                    })}}>
                        <div className = "one"  
                        style={{
                            left: .05 * (0.5 * window.innerWidth - this.state.mouseX) + 123,
                            backgroundPositionY: .05 * (0.5 * window.innerHeight - this.state.mouseY) + 300,
                            backgroundSize: "500px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                        <div className = "one"  
                        style={{
                            left: .1 * (0.5 * window.innerWidth - this.state.mouseX) + 808,
                            backgroundPositionY:  .1 * (0.5 * window.innerHeight - this.state.mouseY) + 408,
                            backgroundSize: "900px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                        <div className = "one"  
                        style={{
                            left: .02 * (0.5 * window.innerWidth - this.state.mouseX) + 1000,
                            backgroundPositionY: .02 * (0.5 * window.innerHeight - this.state.mouseY) + 80,
                            backgroundSize: "300px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                        <div className = "one"  
                        style={{
                            left: .02 * (0.5 * window.innerWidth - this.state.mouseX) + 200,
                            backgroundPositionY: .02 * (0.5 * window.innerHeight - this.state.mouseY) + 120,
                            backgroundSize: "300px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                        <div className = "one"  
                        style={{
                            left: .03 * (0.5 * window.innerWidth - this.state.mouseX) + 640,
                            backgroundPositionY:  .03 * (0.5 * window.innerHeight - this.state.mouseY) + 170,
                            backgroundSize: "370px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                        <div className = "one"  
                        style={{
                            left: .01 * (0.5 * window.innerWidth - this.state.mouseX) + 1050,
                            backgroundPositionY: .01 * (0.5 * window.innerHeight - this.state.mouseY) + 10,
                            backgroundSize: "80px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                    </div>
                        : 
                    <div>
                        loading
                    </div>
                }
            </>
        )
    }
}

export default Home
