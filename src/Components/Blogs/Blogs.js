import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../../App';
import BlogCard from './BlogCard/BlogCard';
import './Blogs.css';

const Blogs = () => {

    const blogs = [1, 1, 1];
    const [active, setActive] = useContext(Nav);

    return (
        <div className='container blogs'>
            <h2 className="title">BLOGS</h2>
            <div className="row">
                {
                    blogs.map(blog => <BlogCard />)
                }
            </div>
            <div className="text-center mt-5">
                <Link to='/blogs'>
                    <button onClick={() => setActive('blog')} className="button">ALL BLOGS</button>
                </Link>
            </div>
        </div>
    );
};

export default Blogs;