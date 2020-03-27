import React, { Component } from 'react'
import Save from './Save'




export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="showcase">
                    <h1>Sav<span className="e-img"></span> for what y<span className="circle"></span>u want,<br /> with who y<span className="circle2"></span>u w<span className="a-img"></span>nt!</h1>
                </div>
                <div className="showcase-disc">
                    <p>Salvare is a new saving app. It's smart,<br /> making saving money simple and social.</p>
                    <button>Start Saving</button>
                </div>
                <div className="main-half-circle"></div>
                <div className="main-quarter-circle"></div>
                <Save />
            </div>
        )
    }
}
