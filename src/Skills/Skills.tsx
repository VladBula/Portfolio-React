import React from 'react';
import s from './Skills.module.css'
import {SkillsType} from "../App";
import SkillBox from "./SkillBox/SkillBox";

type PropsType = {
    skills: Array<SkillsType>
}

const Skills = (props: PropsType) => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <div className={s.header}>
                    <h2 className={s.title}>My skills</h2>
                    <div className={s.line}></div>
                </div>
                <div className={s.skillsRow}>
                    {props.skills.map((s) => {
                        return <SkillBox id={s.id} title={s.title} text={s.text}/>
                    })}



                </div>
            </div>
        </div>
    );
};

export default Skills;