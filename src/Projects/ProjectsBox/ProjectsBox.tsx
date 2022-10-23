import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import s from "./ProjectsBox.module.scss";
import {Fade} from "react-awesome-reveal";

type PropsType = {
    id: string,
    name: string,
    description: string
    style: { backgroundImage: string }
    link: string
}

const ProjectsBox = (props: PropsType) => {
    return (
        <Fade direction='up' duration={3500} cascade triggerOnce>
            <div className={s.projectBox}>
                <div className={s.viewButtonContainer} style={props.style}>

                    <a href={props.link}>View</a>

                </div>
                <div className={s.descriptionContainer}>
                    <h3>{props.name}</h3>
                    <span className={s.projectDescription}>
                    {props.description}
                </span>
                </div>
            </div>
        </Fade>
    );
};

export default ProjectsBox;