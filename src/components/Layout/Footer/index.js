import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCompass, faPhone, faClock, faEnvelope } from '@fortawesome/fontawesome-free-solid';

class Footer extends Component {
    render() {
        return (
            <footer className="bck_b_dark">
                <div className="container">
                    <div className="logo">Logo</div>
                    <div className="wrapper">
                        <div className="left">
                            <h2>Contact Information</h2>
                            <div className="business_nfo">
                                <div className="tag">
                                    <FontAwesomeIcon 
                                        icon={faCompass}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Address</div>
                                        <div>219, Nandannagar 2nd lane</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon 
                                        icon={faPhone}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Phone</div>
                                        <div>9883342340</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon 
                                        icon={faClock}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Working Hours</div>
                                        <div>Mon-Fry / 9am to 9pm</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon 
                                        icon={faEnvelope}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Email</div>
                                        <div>saikatb.biswas@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left">
                            <h2>Be the first to know</h2>
                            <div>Be the first to know Be the first to know Be the first to know Be the first to know</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;