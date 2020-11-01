import React, { useEffect } from 'react';
import './BlogCard.css';
import img from '../../../Images/agency3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const BlogCard = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <div className='col-lg-4 col-md-6'>
            <div
                data-aos='fade-up'
                data-aos-once="true"
            >
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="blog-card card mb-4">
                        <img src='https://i.imgur.com/UR8ex5F.png' className="card-img-top" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">Lorem ipsum dolor.</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="card-footer">
                            <button className="view-detail">READ MORE <FontAwesomeIcon className="detail-icon" icon={faArrowRight} /></button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogCard;