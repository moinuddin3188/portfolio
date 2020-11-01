import React from 'react';
import Modal from 'react-modal';
import './ProjectDetail.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const customStyles = {
    content: {
        width: '50%',
        height: '90%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')


const ProjectDetail = ({ modalIsOpen, closeModal, project }) => {

    const { title, shortDescription, description, technology, slide1, slide2, slide3, github, web } = project;

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    autoplay
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('')}
                >
                    <SwiperSlide>
                        <img width='100%' src={slide1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100%' src={slide2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img width='100%' src={slide3} alt="" />
                    </SwiperSlide>
                </Swiper>
                <div className="modal-body">
                    <div className="modal-title">
                        <h2>{title}</h2>
                        <p>{shortDescription}</p>
                        <h6>Links:</h6>
                        <a target='_blank' href={github}><FontAwesomeIcon className='icon orange' icon={faGithub} /></a>
                        <a target='_blank' href={web}><FontAwesomeIcon className='icon orange' icon={faGlobe} /></a>
                    </div>
                    <div className='mt-4'>
                        <h4 className='orange'>Features</h4>
                        <ul>
                            {
                                description.map(feature => <li>{feature}</li>)
                            }
                        </ul>
                        <h4 className='orange'>Technology</h4>
                        <ul>
                            <li>{technology} </li>
                        </ul>
                    </div>
                    <div className='text-right'>
                        <button onClick={closeModal} className='close-btn'>
                            <FontAwesomeIcon className='close-icon' icon={faTimes} />
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProjectDetail;