import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-name"><h1>Savare</h1></div>
                <div className="footer-links">
                    <p><b>Links</b></p>
                    <p>English</p>
                    <p>Blog</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="footer-knowledge">
                    <p><b>Knowledge</b></p>
                    <p>Careers</p>
                    <p>Privacy Policy</p>
                    <p>Disclaimer</p>
                </div>
                <div className="footer-social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </div>
            </div>
        )
    }
}
