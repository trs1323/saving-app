import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <h1>Salvare</h1>
                </div>
                <div className="menu">
                    <p>Language</p>
                    <p>Blog</p>
                    <p>FAQ</p>
                    <button>Save Saving</button>
                </div>
            </div>
        )
    }
}
