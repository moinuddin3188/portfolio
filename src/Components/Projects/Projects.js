import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../../App';
import { projects } from '../../Fakedata/Fakedata';
import Card from './Card/Card';
import './Projects.css';

const Projects = () => {

    const [active, setActive] = useContext(Nav);
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
                <Link to='/projects'>
                    <button onClick={() => setActive('project')} className="button">ALL PROJECTS</button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;