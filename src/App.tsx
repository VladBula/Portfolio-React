import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import HireOffer from "./HireOffer/HireOffer";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export type SkillsType = {
    id:string
    title:string
    text:string
};

let skills = [
    {
        id: '1',
        title: 'HTML',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ' +
            'professor at Hampden-Sydney College in Virginia, looke'
    },{
        id: '2',
        title: 'CSS',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ' +
            'professor at Hampden-Sydney College in Virginia, looke'
    },{
        id: '3',
        title: 'JS',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ' +
            'professor at Hampden-Sydney College in Virginia, looke'
    },{
        id: '4',
        title: 'TS',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ' +
            'professor at Hampden-Sydney College in Virginia, looke'
    },{
        id: '5',
        title: 'REACT',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin ' +
            'professor at Hampden-Sydney College in Virginia, looke'
    },

]

export type ProjectsType = {
    id:string,
    name:string,
    description:string
}

let projects = [
    {
        id:'1',
        name:'Todolist',
        description:'Todolist description',
    },
    {
        id:'2',
        name:'Social network',
        description:'Social network description',
    },
    {
        id:'3',
        name:'Counter',
        description:'Counter description',
    },

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
