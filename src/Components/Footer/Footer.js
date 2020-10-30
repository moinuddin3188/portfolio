import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';



const Footer = () => {
    return (
        <div className="footer">
            <Fade down>
                <h4 className='text-center text-white p-5'>Say hello <span className='orange'>!</span></h4>
            </Fade>
            <div className='social-link d-flex justify-content-center'>
                <Fade left>
                    <a href="#">
                        <FontAwesomeIcon className='brand-icon' icon={faGithub} />
                    </a>
                </Fade>
                <Fade down>
                    <a href="#">
                        <FontAwesomeIcon className='brand-icon' icon={faLinkedinIn} />
                    </a>
                </Fade>
                <Fade down>
                    <a href="#">
                        <FontAwesomeIcon className='brand-icon' icon={faGlobe} />
                    </a>
                </Fade>
                <Fade right>
                    <a href="#">
                        <FontAwesomeIcon className='brand-icon' icon={faFacebook} />
                    </a>
                </Fade>
            </div>
            <p className='copyright'>Copyright © 2020 || <span className="orange">Moin Uddin</span> || All rights reserved</p>
        </div>
    );
};

export default Footer;