import React, { useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Footer = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className="footer">
            <div
                data-aos='fade-right'
                data-aos-once="true"
            >
                <h4 className='text-center text-white p-5'>Say hello <span className='orange'>!</span></h4>
            </div>
            <div className='social-link d-flex justify-content-center'>
                <a target="_blank" href="https://github.com/moinuddin3188">
                    <FontAwesomeIcon className='brand-icon' icon={faGithub} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/moinuddin3188/">
                    <FontAwesomeIcon className='brand-icon' icon={faLinkedinIn} />
                </a>
                <a target="_blank" href="#">
                    <FontAwesomeIcon className='brand-icon' icon={faGlobe} />
                </a>
                <a target="_blank" href="#">
                    <FontAwesomeIcon className='brand-icon' icon={faFacebook} />
                </a>
            </div>
            <p className='copyright'>Copyright © 2020 || <span className="orange">Moin Uddin</span> || All rights reserved</p>
        </div>
    );
};

export default Footer;