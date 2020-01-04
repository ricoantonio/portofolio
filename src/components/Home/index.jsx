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

    
    // moveDiv(tempX)
    
    // {	
    //     console.log(this.state.objectArray[0][0]);
    //     for (var i=0;i<this.state.objectArray.length;i++)
    //     {
    //         var yourDivPositionX = this.state.objectArray[i][3] * (0.5 * window.innerWidth - tempX) + this.state.objectArray[i][1];
    //         this.state.objectArray[i][0].style.left = yourDivPositionX + 'px';
    //     }
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
                            left: .05 * (0.5 * window.innerWidth - this.state.mouseX) + 323,
                            backgroundPositionY: 380,
                            backgroundSize: "300px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                        <div className = "one"  
                        style={{
                            left: .07 * (0.5 * window.innerWidth - this.state.mouseX) + 808,
                            backgroundPositionY: 400,
                            backgroundSize: "300px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                        <div className = "one"  
                        style={{
                            left: .03 * (0.5 * window.innerWidth - this.state.mouseX) + 900,
                            backgroundSize: "300px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                        <div className = "one"  
                        style={{
                            left: .02 * (0.5 * window.innerWidth - this.state.mouseX) + 323,
                            backgroundSize: "300px",
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
