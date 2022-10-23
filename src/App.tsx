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

export type SkillsType = {
    id: string
    title: string
    text: string
    iconName: string | null
    iconSize: number
};

let skills = [
    {
        id: '1',
        title: 'HTML',
        text:"",
        iconName: "html5",
        iconSize: 80
    }, {
        id: '2',
        title: 'CSS',
        text: "",
        iconName: "css3",
        iconSize: 80
    }, {
        id: '3',
        title: 'JS',
        text: "",
        iconName: "javascript",
        iconSize: 80

    }, {
        id: '4',
        title: 'TS',
        text: "",
        iconName: "typescript",
        iconSize: 80
    }, {
        id: '5',
        title: 'REACT',
        text: "",
        iconName: "react",
        iconSize: 80
    },

]

export type ProjectsType = {
    id: string,
    name: string,
    description: string
    image: { backgroundImage: string }
    link: string
}

let projects = [
    {
        id: '1',
        name: 'Todolist',
        description: 'SPA for managing to-do lists and their items. Implemented: add todolist / task, remove todolist / task, rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist.\n' +
            'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, React-router-dom v6, Axios, Formik, Material UI, CSS',
        image: {
            backgroundImage: `url(${todoImg})`
        },
        link: 'https://github.com/VladBula/Todolist'

    },
    {
        id: '2',
        name: 'Social network',
        description: 'SPA for social actions - messaging and blogging. Implemented: login page with validation, error displaying and captcha; 404 page; profile page with abilities to: view the information of the selected user, edit your profile information, change avatar, add a new post and view your published posts; dialogs page with the ability to send a message; users page and friends page with abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile.\n' +
            'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, React-router-dom, Axios, Formik, CSS',
        image: {
            backgroundImage: `url(${socialNetwork})`
        },
        link: 'https://github.com/VladBula/social-network'

    },
    {
        id: '3',
        name: 'Cards-training',
        description: 'SPA for learning by cards. Implemented: login page with validation; register page with validation; reset password page with validation; 404 page; profile page with abilities to: edit your profile information (change avatar and nickname), add a new card pack and edit, search, sort, view, remove and learn your card packs; packs list page with abilities to: search, sort, view and learn any card packs; learn page with abilities to answer a question and evaluate your answer.\n' +
            'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, React-router-dom v6, Axios, Formik, CSS, Material UI, ESLint, Prettier',
        image: {
            backgroundImage: `url(${socialNetwork})`
        },
        link: 'https://github.com/mishashmidt0/Card-training'

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
