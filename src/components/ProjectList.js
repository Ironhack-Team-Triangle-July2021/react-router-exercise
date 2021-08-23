import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectList(props) {
    return (
        <>
            <h2>List of projects</h2>

            { props.projectsArr.map( projectObj => {
                return (
                    <div key={projectObj.id} className="project-summary">
                        <h5>{projectObj.title}</h5>
                        <Link to={`/projects/${projectObj.id}`}>
                            More details
                        </Link>
                    </div>
                )
            }) }
        </>
    )
}
