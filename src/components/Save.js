import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faChartPie, faIdCardAlt } from '@fortawesome/free-solid-svg-icons'
import Headshot1 from '../img/headshot-1.png';
import Headshot2 from '../img/headshot-2.png';
import Headshot3 from '../img/headshot-3.png';

export default class Save extends Component {
    render() {
        return (
            <div className="save-app" data-aos="fade-left">
                <div className="flex" >
                    <div>
                        <h1>Savings</h1>
                        <p>Total:</p>
                        <p><b>$10,071.23</b></p>
                    </div>
                    <div className="add-money">
                        <button>Add<br />Money</button>
                    </div>
                </div>
                <div className="wallet">
                    <p><b>Wallet</b></p>
                    <p>$543.09</p>
                    <div className="wallet-menu">:</div>
                </div>
                <div className="goals">
                    <p>Goals:</p>
                    <div>
                        <button>All</button>
                        <button>Team</button>
                        <button>Personal</button>
                    </div>
                </div>
                <div className="goal-showcase">
                    <p>Alpine Trip</p>
                    <div className="goal-img">
                        <img src={Headshot1} />
                        <img src={Headshot2} />
                        <img src={Headshot3} />
                    </div>
                    <div className="progress-bar">
                        <div className="progress-bar1"></div>
                        <div className="progress-bar2"></div>
                        <div className="progress-bar3"></div>
                        <div className="progress-bar4"></div>
                    </div>
                    <div className="goal-money">
                        <p>90% Saved</p>
                        <p>$4,684/5,000</p>
                    </div>
                </div>
                <div className="save-menu">
                    <FontAwesomeIcon icon={faUserClock} size="2x" />
                    <FontAwesomeIcon icon={faChartPie} size="2x" />
                    <FontAwesomeIcon icon={faIdCardAlt} size="2x" />
                </div>
            </div>
        )
    }
}
