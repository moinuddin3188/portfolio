import React, { useEffect } from 'react';
import './About.css';
import profile from '../../Images/profile2.png';
import Navbar from '../Home/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';
import { skills } from '../../Fakedata/Fakedata';


const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <>
            <div className='container about'>
                <div className="row">
                    <div
                        className="col-lg-6 col-12 pr-lg-5"
                        data-aos='fade-right'
                        data-aos-once="true"
                    >
                        <img width="40%" src={profile} alt="" />
                        <div className='my-description'>
                            <p>
                                I'm <span className='orange' style={{ fontSize: '30px', fontWeight: '600' }}>Moin Uddin</span>
                            , a front-end Web Developer with an avid interest in JavaScript. Skilled in React, Bootstrap, Express.js, MongoDB, Node.js but I'm fallen in love with JavaScript. Always trying to keeping myself upgraded with the latest technology. My dream is to be a full-stack Web Developer.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 col-12 pt-lg-0 pt-5 mt-5 mt-lg-0 skills"
                        data-aos='fade-left'
                        data-aos-once="true"
                    >
                        <h3 className='text-white'>My Skills</h3>
                        <div className='skill'>
                            {
                                skills.map(skill =>
                                    <div className={skill.class}>
                                        <span className='text-white'>{skill.name}</span>
                                        <div className="react progress-bar mb-3">
                                            <span className='text-right'>{skill.percentage}</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;