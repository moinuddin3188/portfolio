import React, { useEffect } from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className='d-flex justify-content-center'>
            <div
                className='contact'
                data-aos='fade-up'
                data-aos-once="true"
            >
                <h2 className='text-white text-center pb-4'>CONTACT</h2>
                <div className="contact-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5 className='text-center orange pb-2'>Send an Email</h5>

                        <input name="name" ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <span>First name is required </span>}

                        <input name='email' ref={register({ required: true })} placeholder='Email' />
                        {errors.email && <span> First name is required </span>}

                        <textarea type='text' name="message" id="" ref={register({ required: true })} placeholder="Your Message" />
                        {errors.message && <span> First name is required </span>}

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;