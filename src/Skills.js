import React from 'react';
import skills from './stylesheets/skills.css';
import reactLogo from './images/react.png';
import angularLogo from './images/angularLogo.png';
import javascriptLogo from './images/javascriptLogo.png';


export default class Skills extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        debugger;

        // window.addEventListener("scroll", function() {
        //     let reactIcon = document.getElementById('react');
        //     let angularIcon = document.getElementById('angular');
        //     let jsIcon = document.getElementById('javascript');
        //
        //     let yOffset = window.pageYOffset%200;
        //     if(window.pageYOffset>1000) {
        //         yOffset = 0;
        //     }
        //
        //     reactIcon.style.transform = "translateX(-" + yOffset + "%)";
        //     angularIcon.style.transform = "translateX(" + yOffset + "%)";
        //     jsIcon.style.transform = "translateX(-" + yOffset + "%)";
        // })

        return (

            <div className="skills">
                <div className="left">
            <h3>SKILLS</h3>
                <h4>Programming Languagues</h4>
                <ul>
                    <li>Java</li>
                        <li>C++</li>
                    <li>Python</li>
                    <li>SQL</li>
                </ul>
                <h4>Web Technologies</h4>
                <ul>
                    <li>React</li>
                    <li>Angular</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>HTML, CSS</li>
                    <li>NodeJS</li>
                    <li>PHP</li>
                </ul>
                    <h4>Databases</h4>
                    <ul>
                        <li>Oracle</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="images">
                    <img src={reactLogo} className="skillLogo" id="react" alt="reactLogo"/><br/>
                    <img src={angularLogo} className="skillLogo" id="angular" alt="angularLogo"/><br/>
                    <img src={javascriptLogo} className="skillLogo" id="javascript" alt="javascriptLogo"/><br/>
                </div>
            </div>


        )
    }
}