import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faPiggyBank, faLock } from '@fortawesome/free-solid-svg-icons'

import Pic from '../img/oneofakind.jpg'

export default class OneOfAKind extends Component {
    render() {
        return (
            <div className="One-of-a-kind">
                <div className="One-of-a-kind-header">
                    <h1>What makes<br /></h1>
                    <h1><b>Spiff one of a kind</b></h1>
                </div>
                <div className="One-of-a-kind-body">
                    <div className="One-of-a-kind-list">
                        <div className="One-of-a-kind-list-container" data-aos="fade-right" data-aos-duration="800">
                            <div className="One-of-a-kind-list-img light-purple">
                                <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                            </div>
                            <div>
                                <h4>Salvare is versatile</h4>
                                <p>It works no matter where you bank or where you are.</p>
                            </div>
                        </div>
                        <div className="One-of-a-kind-list-container" data-aos="fade-right" data-aos-duration="800">
                            <div className="One-of-a-kind-list-img purple" >
                                <FontAwesomeIcon icon={faPiggyBank} size="2x" />
                            </div>
                            <div>
                                <h4>Salvare is totally free! No hidden fees</h4>
                                <p>Salvare is free to use and you get good interest on your<br /> money too! More information about interest rate<br /> offered coming soon</p>
                            </div>
                        </div>
                        <div className="One-of-a-kind-list-container" data-aos="fade-right" data-aos-duration="800">
                            <div className="One-of-a-kind-list-img pink">
                                <FontAwesomeIcon icon={faLock} size="2x" />
                            </div>
                            <div>
                                <h4>Salvare is secure</h4>
                                <p>Our top priority is to keep your money safe. Salvare provides<br /> BankID for a secure and instant authenication process.<br /> All savings are secured under The US Banks<br /> Guarantee Fund through our bank parther, US Bank.</p>
                            </div>
                        </div>
                    </div>
                    <div className="One-of-a-kind-pic">
                        <div className="One-of-a-kind-pic-background"></div>
                        <img src={Pic} />
                        <div className="One-of-a-kind-pic-circle1"></div>
                        <div className="One-of-a-kind-pic-circle2"></div>
                    </div>
                </div>
            </div>
        )
    }
}
