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
        // this.fillObjectArray()
        // this.positionDivs()
        
        this.setState({done:true})
    }
    

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
{/*                         
                        <h1>{this.state.mouseX}</h1>
                        <h1>{this.state.mouseY}</h1> */}

                        <div className= "one" 
                        style={{
                            backgroundPositionX:0.05*(this.state.mouseX-.5*window.innerWidth)+300, 
                            backgroundPositionY:this.state.mouseY*-.05, 
                            backgroundSize: "300px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                        <div className= "one" 
                        style={{
                            backgroundPositionX:0.02*(this.state.mouseX-.5*window.innerWidth)+600, 
                            backgroundPositionY:400, 
                            backgroundSize: "300px",
                            position:"absolute",
                            width:"100%",
                            height:"100%"
                            }}>
                        </div>
                        <div className= "one" 
                        style={{
                            backgroundPositionX:0.05*(this.state.mouseX-.5*window.innerWidth)+1500, 
                            backgroundPositionY:this.state.mouseY*-.05, 
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
