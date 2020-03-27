import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export default class Deposit extends Component {
    render() {
        return (
            <div className="deposit">
                <div className="deposit-img" data-aos="fade-right" data-aos-duration="800">

                    <div className="deposit-img-base">
                        <FontAwesomeIcon icon={faUserClock} size="2x" />
                        <div className="deposit-img-overlay">
                            <div className="deposit-img-halfcircle1"></div>
                            <div className="deposit-img-halfcircle2"></div>
                            <div className="deposit-img-halfcircle3"></div>
                        </div>
                        <div className='deposit-img-500'><h3>+500</h3></div>
                        <div className='deposit-img-1000'><h3>+1000</h3></div>
                        <div className="deposit-snowboard">
                            <div className="deposit-snowboard-text">
                                <h4>Snowboarding Gear</h4>
                                <div>
                                    <p>$3,204/5,200</p>

                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    <p>10/2020</p>

                                </div>

                            </div>
                            <div className='deposit-snowboard-btn-container'>
                                <div className="deposit-snowboard-btn1"><p>Move<br />funds</p></div>
                                <div className="deposit-snowboard-btn2"><p>Add<br />money</p></div>
                            </div>
                        </div>
                        <div className="deposit-circle1"></div>
                        <div className="deposit-circle2"></div>
                    </div>

                </div>
                <div className="deposit-text">
                    <h1>Recurring deposits<br /><b>or single transactions</b></h1>
                    <p>Save now, save monthy, save whenever you want!<br />Boost your plans with single amounts or grow your<br />money regulary with monthly deposits</p>
                </div>
            </div>
        )
    }
}
