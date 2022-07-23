import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import HireOffer from "./HireOffer/HireOffer";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import todoImg from "./assets/images/todolist.png";
import socialNetwork from "./assets/images/social-network.png";

// import { faReact } from '@fortawesome/free-brands-svg-icons';
// import { faJs } from '@fortawesome/free-brands-svg-icons';
// import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
// import { faCss3 } from '@fortawesome/free-brands-svg-icons';
// import {IconDefinition} from "@fortawesome/fontawesome-common-types";
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export type SkillsType = {
    id:string
    title:string
    text:string
    iconName:string | null
    iconSize:number
};

let skills = [
    {
        id: '1',
        title: 'HTML',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ' +
            'professor at Hampden-Sydney College in Virginia, looke',
        iconName:"html5",
        iconSize:80
    },{
        id: '2',
        title: 'CSS',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ' +
            'professor at Hampden-Sydney College in Virginia, looke',
        iconName:"css3",
        iconSize:80
    },{
        id: '3',
        title: 'JS',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ' +
            'professor at Hampden-Sydney College in Virginia, looke',
        iconName:"javascript",
        iconSize:80

    },{
        id: '4',
        title: 'TS',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ' +
            'professor at Hampden-Sydney College in Virginia, looke',
        iconName:"typescript",
        iconSize:80
    },{
        id: '5',
        title: 'REACT',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ' +
            'professor at Hampden-Sydney College in Virginia, looke',
        iconName:"react",
        iconSize:80
    },

]

export type ProjectsType = {
    id:string,
    name:string,
    description:string
    image: { backgroundImage: string}
}

let projects = [
    {
        id:'1',
        name:'Todolist',
        description:'Todolist description',
        image:{
            backgroundImage:`url(${todoImg})`
        }

    },
    {
        id:'2',
        name:'Social network',
        description:'Social network description',
        image: {
            backgroundImage:`url(${socialNetwork})`
        }

    },
    // {
    //     id:'3',
    //     name:'Counter',
    //     description:'Counter description',
    // },

]

function App() {


    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <HireOffer/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
