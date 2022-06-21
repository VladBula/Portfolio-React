import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import s from "./ProjectsBox.module.scss";

type PropsType = {
    id:string,
    name:string,
    description:string
    style:{ backgroundImage: string }
}

const ProjectsBox = (props:PropsType) => {
    return (
        <div className={s.projectBox}>
            <div className={s.viewButtonContainer} style={props.style}>

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