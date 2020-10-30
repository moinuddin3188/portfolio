import React from 'react';
import { projects } from '../../Fakedata/Fakedata';
import Card from './Card/Card';
import './Projects.css';

const Projects = () => {

    const project = projects;

    return (
        <div className='container projects'>
            <h2 className='title'>PROJECTS</h2>
            <div className="row card-group">
                {
                    project.map(project => <Card
                        key={project.id}
                        project={project}
                    />)
                }
            </div>
            <div className='text-center pt-5'>
                <button className="button">ALL PROJECTS</button>
            </div>
        </div>
    );
};

export default Projects;