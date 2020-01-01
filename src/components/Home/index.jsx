import React, { Component } from 'react'
import './style.scss'

export class Home extends Component {

    state={
        tempX:0,
        tempY:0,
        objectArray:new Array(),
        IE:null
    }
    fillObjectArray=()=>{

        var birdDiv = document.getElementById("bird");
        var birdX = 312; //position div from half width of the page
        var birdY = 33;
        var birdFactor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
        var birdArray = new Array();
        birdArray.push(birdDiv, birdX, birdY, birdFactor);
        this.state.objectArray.push(birdArray);
        
        var bush1Div = document.getElementById("bush1");
        var bush1X = -28;
        var bush1Y = 352;
        var bush1Factor = 0.06;
        var bush1Array = new Array();
        bush1Array.push(bush1Div, bush1X, bush1Y, bush1Factor);
        this.state.objectArray.push(bush1Array);
    }

    // Main function to retrieve mouse x-y pos.s

    getMouseXY=(e)=>{
        if (this.state.IE) { // grab the x-y pos.s if browser is IE
            this.setState({tempX:e.clientX + document.body.scrollLeft}) 
            this.setState({tempY:e.clientY + document.body.scrollTop}) 
            } else {  // grab the x-y pos.s if browser is NS
            this.setState({tempX:e.pageX})
            this.setState({tempY:e.pageY})
        }  
            // catch possible negative values in NS4
            if (this.state.tempX < 0){this.setState({tempX:0})}
            if (this.state.tempY < 0){this.setState({tempY:0})}
            
            this.moveDiv(this.state.tempX);
            
            return true
    }

    moveDiv=(tempX)=>{

        for (var i=0;i<this.state.objectArray.length;i++){
            var yourDivPositionX = this.state.objectArray[i][3] * (0.5 * 10000 - tempX) + this.state.objectArray[i][1];
            this.state.objectArray[i][0].style.left = yourDivPositionX + 'px';
	    }
    }

    positionDivs=()=>{
        for (var i=0;i<this.state.objectArray.length;i++){
            this.state.objectArray[i][0].style.left = this.state.objectArray[i][1] + "px";
            this.state.objectArray[i][0].style.top = this.state.objectArray[i][2] + "px";
	    }
    }

    render() {
        // Detect if the browser is IE or not.
        // If it is not IE, we assume that the browser is NS.
        this.setState({IE:document.all?true:false})
        // If NS -- that is, !IE -- then set up for mouse capture
        if (!this.state.IE) document.captureEvents(Event.MOUSEMOVE)

        // Set-up to use getMouseXY function onMouseMove
        document.onmousemove = this.getMouseXY;

        // Temporary variables to hold mouse x-y pos.s
        return (
            <div>
                {this.fillObjectArray()}
                {this.positionDivs()}
            </div>
        )
    }
}

export default Home
