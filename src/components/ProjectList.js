import React from 'react'
import { Link } from 'react-router-dom'


const renderProjectSummary = (projectObj) => {
    return (
        <div key={projectObj.id} className="project-summary">
            <h5>{projectObj.title}</h5>

            <p>
                Technogies: <br />
                { projectObj.technologies.map(technology => renderProjectBadges(technology) )}
            </p>

            <Link to={`/projects/${projectObj.id}`}>
                More details
            </Link>
        </div>
    )
}

const renderProjectBadges = (technology) => {
    return <Link to={`/projects?technology=${technology}`} key={technology} className="badge">{technology}</Link>
}


export default function ProjectList(props) {
    const filteredProjects = props.projectsArr.filter( (project) => {
        if(props.filterBy===undefined) {
            return true;
        }
        return project.technologies.includes(props.filterBy);
    });
    
    return (
        <>
            <h2>List of projects</h2>

            { filteredProjects.map(projectObj => renderProjectSummary(projectObj)) }
        </>
    )
}
