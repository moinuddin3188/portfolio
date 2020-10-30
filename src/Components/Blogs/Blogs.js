import React from 'react';
import BlogCard from './BlogCard/BlogCard';
import './Blogs.css';

const Blogs = () => {

    const blogs = [1,1,1];

    return (
        <div className='container blogs'>
            <h2 className="title">BLOGS</h2>
            <div className="row">
                {
                    blogs.map(blog => <BlogCard/>)
                }
            </div>
            <div className="text-center mt-5">
                <button className="button">ALL BLOGS</button>
            </div>
        </div>
    );
};

export default Blogs;