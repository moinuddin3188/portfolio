import React, { useEffect } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import img from '../../../Images/agency3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Card = (props) => {

    const { title, shortDescription, keyTechnology } = props.project;

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <div className='col-md-6 col-lg-4 mb-4'>
            <div 
                data-aos='fade-up'
                data-aos-once="true"
            >
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="project-card card">
                        <img src={img} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 class="card-title">{title}</h4>
                            <p class="card-text">{shortDescription}</p>
                            <div>
                                {
                                    keyTechnology.map(tech => <span className='key-tech'>{tech}</span>)
                                }
                            </div>
                        </div>
                        <div class="card-footer">
                            <button className="view-detail">VIEW DETAILS <FontAwesomeIcon className="detail-icon" icon={faArrowRight} /></button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Card;