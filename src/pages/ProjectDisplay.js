import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helper/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';


const ProjectDisplay = () => {
    const { id } = useParams()
    const project = ProjectList[id]
    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <h1><b>Skills </b> {project.skill} </h1>
            <a href={project.source}> <GitHubIcon /></a>
            <a href={project.demo} ><Button variant="contained" color="success">
                Live Demo
            </Button>
            </a>
        </div>
    )
}

export default ProjectDisplay
