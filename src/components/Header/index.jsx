import React, { Component } from 'react'
import './style.scss';

import github from '../../pic/github.svg'
import linkedin from '../../pic/linkedin.svg'

export class Header extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <h3>
                        RICO ANTONIO
                    </h3>
                </div>
                <div className="right">
                    <img className="img-logo" src={linkedin} alt="linkedin"/>
                    <img className="img-logo" src={github} alt="github"/>
                </div>
            </>
        )
    }
}

export default Header
