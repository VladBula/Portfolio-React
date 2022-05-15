import React from 'react';
import s from "./ProjectsBox.module.css";

type PropsType = {
    id:string,
    name:string,
    description:string
}

const ProjectsBox = (props:PropsType) => {
    return (
        <div className={s.projectBox}>
            <div className={s.viewButtonContainer}>

                    <a href="#" >View</a>

            </div>
            <div className={s.descriptionContainer}>
                <h3>{props.name}</h3>
                <span className={s.projectDescription}>
                    {props.description}
                </span>
            </div>
        </div>
    );
};

export default ProjectsBox;