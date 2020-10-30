import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import Typical from 'react-typical';
import profile from '../../../Images/profile2.png';


const Header = () => {
    return (
        <div className="header">
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6 col-12 order-2 order-lg-1 d-flex align-items-center">
                        <div>
                            <Fade left>
                                <h1>Hello!</h1>
                                <h1>I'm <span className='orange'>Moin Uddin</span></h1>
                                <h1>
                                    I'm a{' '}
                                    <Typical
                                        loop={Infinity}
                                        wrapper={'span'}
                                        steps={[
                                            'Web Developer',
                                            1000,
                                            'Programmer',
                                            1000
                                        ]}
                                    />
                                </h1>
                                <button className='button mt-4'>Download CV <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} /></button>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2 pb-5 pb-lg-0 d-flex align-items-center">
                        <Fade right>
                            <img width='90%' src={profile} alt="" />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;