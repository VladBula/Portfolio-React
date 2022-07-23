import React from 'react';
import s from "./Projects.module.scss";
import ProjectsBox from "./ProjectsBox/ProjectsBox";
import {ProjectsType} from "../App";


type PropsType = {
    projects: Array<ProjectsType>
}

const Projects = (props:PropsType) => {

    // const todolist = {
    //     backgroundImage:`${todoImg}`
    // }
    // const SPACE = {
    //     backgroundImage:`${spaceIMG}`
    // }

    return (
        <div className={s.projectsBlock} id="projects">
            <div className={s.container}>
                <div className={s.header}>
                    <h2 className={s.title}>My projects</h2>
                    <div className={s.line}></div>
                </div>
                <div className={s.projectsRow}>

                    {props.projects.map((p) => {
                        return <ProjectsBox key={p.id} id={p.id} name={p.name} description={p.description} style={p.image}/>
                    })}



                </div>
            </div>
        </div>
    );
};

export default Projects;