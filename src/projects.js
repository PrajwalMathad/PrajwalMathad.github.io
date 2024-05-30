import React from 'react';
import DataStore from './dataStore';

const Projects = () => {

    const projectsDiv = () => {
        return DataStore.projects.map(project => {
            return (
                <div className="single-exp">
                    <div className="title">{project.title}
                        {project.url ? <a href={project.url} className="company margin-left-10" target="_blank" rel="noreferrer">{" "}
                            <i className="icon fa fa-link" aria-hidden="true"></i>
                        </a> : null}
                        {project.github ? <a href={project.github} className="company margin-left-10" target="_blank" rel="noreferrer">
                            <i class="icon fab fa-github-square"></i>
                        </a> : null}
                    </div>
                    <div className="stack"> {project.stack}</div>
                    <div className="exp-description">
                        {project.description}
                    </div>
                </div>
            )
        })
    }

    return (
        <div id="projects" className="exp-container section-container">
            <div className="section-header">Projects </div>
            {projectsDiv()}
        </div>
    )
}

export default Projects;