import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [active, setActive] = useState('home');

    return (
        <div className="navbar-container">
            <nav class="navbar navbar-expand-lg navbar-light container">
                <h1 class="navbar-brand orange m-0" href="#">MOIN</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a onClick={() => setActive('home')} class={active === 'home' ? "nav-link active": "nav-link"} href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a onClick={() => setActive('about')} class={active === 'about' ? "nav-link active": "nav-link"} href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a onClick={() => setActive('project')} class={active === 'project' ? "nav-link active": "nav-link"} href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a onClick={() => setActive('blog')} class={active === 'blog' ? "nav-link active": "nav-link"} href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a onClick={() => setActive('contact')} class={active === 'contact' ? "nav-link active": "nav-link"} href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;