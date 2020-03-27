import React, { Component } from 'react';
import Headshot4 from '../img/headshot-4.png';
import Headshot5 from '../img/headshot-5.png';
import Family from '../img/family.png';
import FullHeadshot from '../img/fullheadshot.png';

export default class FamilyFriends extends Component {
    render() {
        return (
            <div className="family-friends">
                <div className="family-header"></div>
                <div className="family-pic" >
                    <img className="family-pic1" src={Family} />
                    <div className="family-pic-bottom">
                        <img src={Headshot4} />
                        <p><b>You</b><br />$250/525</p>
                    </div>
                    <div className="family-pic-circle1"></div>
                    <div className="family-pic-circle2"></div>
                    <div className="family-pic-half-circle"></div>
                </div>
                <div className="family-text">
                    <h1>Inculde<br />friends and family</h1>
                    <p>Some things are <span><b>better together</b></span>. Luckily its easy<br />breezy to save for shared goals with Salvare</p>
                    <div >
                        <div className="half-square" data-aos="fade-right" data-aos-duration="800"></div>
                        <img data-aos="fade-right" data-aos-duration="800" src={FullHeadshot} /></div>
                </div>
                <div className="family-footer-container" >
                    <div className="family-footer">
                        <img src={Headshot5} />
                        <div><p>Marcus <br />$124/200</p></div>
                        <p>62%</p>
                    </div>
                    <div className="family-footer-circle"></div>
                </div>
            </div>
        )
    }
}
