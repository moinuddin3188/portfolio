import React, { useEffect } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import img from '../../../Images/agency3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectDetail from '../ProjectDetail/ProjectDetail';



const Card = (props) => {

    const { title, shortDescription, keyTechnology, slide1, github, web } = props.project;

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
                        <img src={slide1} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 class="card-title">{title}</h4>
                            <p class="card-text">{shortDescription}</p>
                            <div>
                                {
                                    keyTechnology.map(tech => <span className='key-tech'>{tech}</span>)
                                }
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <button onClick={openModal} className="view-detail">VIEW DETAILS <FontAwesomeIcon className="detail-icon" icon={faArrowRight} /></button>
                            <div className='ml-auto' style={{paddingTop: '3px'}}>
                                <a target='_blank' href={github}><FontAwesomeIcon className="icon orange" icon={faGithub} /></a>
                                <a target='_blank' href={web}><FontAwesomeIcon className="icon orange" icon={faGlobe} /></a>
                            </div>
                            <ProjectDetail
                                modalIsOpen={modalIsOpen}
                                closeModal={closeModal}
                                project={props.project}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Card;