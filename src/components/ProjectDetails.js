import React from 'react'

function ProjectDetails(props) {
    return (
        <div className="project">
            <h5>{props.title}</h5>
            <p>Project id: {props.id}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectDetails;