import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Nav } from '../../../App';
import './Navbar.css';

const Navbar = () => {

    const [active, setActive] = useContext(Nav);

    const history = useHistory();
    const goHome = () => {
        history.push('/');
        setActive('home');
    }

    return (
        <div className="navbar-container">
            <nav class="navbar navbar-expand-lg navbar-light container">
                <h1 onClick={goHome} class="navbar-brand orange m-0" href="#">MOIN</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link onClick={() => setActive('home')} class={active === 'home' ? "nav-link active" : "nav-link"} to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link onClick={() => setActive('about')} class={active === 'about' ? "nav-link active" : "nav-link"} to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link onClick={() => setActive('project')} class={active === 'project' ? "nav-link active" : "nav-link"} to="projects">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link onClick={() => setActive('blog')} class={active === 'blog' ? "nav-link active" : "nav-link"} to="/blogs">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link onClick={() => setActive('contact')} class={active === 'contact' ? "nav-link active" : "nav-link"} to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <a onClick={() => setActive('resume')} class={active === 'resume' ? "nav-link active" : "nav-link"} target='_blank' href="https://drive.google.com/file/d/1684Y6dziV-nsMXY7rx5edY6DpGftiPm_/view?usp=sharing">Resume</a>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;