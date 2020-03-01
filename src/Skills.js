import React from 'react';
import Botui from 'botui-react';
import reactLogo from './images/react.png';
import angularLogo from './images/angularLogo.png';
import javascriptLogo from './images/javascriptLogo.png';


export default class Skills extends React.Component {

    constructor(props) {
        super(props);

    }



    showMenu() {
        const self=this;
        this.botui.message.bot({
            content: "What would you like to know?",
            delay: 1000
        }).then(function() {
            self.botui.action.button({
                delay: 1000,

                action: [
                    {
                        text: 'Skills',
                        value: 'skills'
                    },
                    {
                        text: 'Courses',
                        value: 'courses'
                    },
                    {
                        text: 'Hobbies',
                        value: 'hobbies'
                    },

                ]
            }).then(function (res) {
                if(res.value=='skills')
                    self.skills();
                else if(res.value=='courses')
                    self.courses();
            });
        });
    }

    skills() {
        const self = this;
        this.botui.message.bot({
            content: "I'm proficient with Web Technologies such as React, Angular, JavaScript, TypeScript, HTML, CSS, NodeJS, JQuery and PHP",
            delay: 1000,
            loading: true,
        }).then(function () {
            self.botui.message.bot({
                delay: 2000,
                content: "I am an expert in Java and SQL"
            })
        }).then(function () {
        self.botui.message.bot({
            delay: 3000,
            content: "I am also familiar with C, C++, R and Python"
        })
    }).then(function () {
            self.botui.message.bot({
                delay: 4000,
                content: "Databases I've worked with: Oracle, MySQL, MongoDB"
            })
        }).then(function () {
            return self.botui.message.bot({
                delay: 5000,
                content: "Tools I've used: AndroidStudio, Oracle 12C, Heroku, GitHub, RStudio, Endur"
            })
        }).then(function () {
            self.showMenu();
        })
    }

    courses() {
        const self = this;
        this.botui.message.bot({
            content: "I've taken up courses such as Web Application Development, Server Side Development and Rich Internet Application Development and mastered several web technologies",
            delay: 1000,
            loading: true,
        }).then(function () {
            self.botui.message.bot({
                delay: 2000,
                content: "I also learnt how to build Android apps in my 'Mobile Application Development' class"
            })
        }).then(function () {
            self.botui.message.bot({
                delay: 3000,
                content: "Courses like Advanced Algorithms, Advanced Database Management and Advanced Programming Techniques and Software Design Patterns have helped me build a strong foundation in Programming"
            })
        }).then(function () {
            self.showMenu();
        })
    }



    componentDidMount() {
        debugger;
        const self=this;
        this.botui.message.bot({
            content: "Hello there!",
            delay: 1000
        }).then(function () {
            self.botui.message.add({
                content: "What's your name?"
            })
        }).then(function () { // wait till its shown
            return self.botui.action.text({ // show 'text' action
                action: {
                    placeholder: 'Your name'
                },
            })
        }).then(function (res) { // get the result
            self.botui.message.add({
                loading: true,
                delay: 800,
                content: 'Nice to meet you, ' + res.value
            })
        }).then(function (res) { // get the result
            self.botui.message.add({
                delay: 1000,
                content: 'What would you like to know?',
                loading:true
            })
        }).then(function() {
            return self.botui.action.button({
                delay: 1500,

                action: [
                    {
                        text: 'Skills',
                        value: 'skills'
                    },
                    {
                        text: 'Courses',
                        value: 'courses'
                    },
                    {
                        text: 'Hobbies',
                        value: 'hobbies'
                    },

                ]
            }).then(function (res) {
                if(res.value=='skills')
                    self.skills();
                else if(res.value=='courses')
                    self.courses();
            });
        });



    }

    render() {
        debugger;

        function openChatBot() {
            let modal = document.getElementById('myModal');


            let modalImg = document.getElementById("img01");
            let close = document.getElementById("close");
            debugger;


            modal.style.display = "block";

            close.onclick = function () {
                modal.style.display = "none";
            }
        }

        return (

            <div className="skills">
                <div className="left">
            <h3 id={"skills"}>About me</h3>
                    <p>Hi, I'm Swetha</p>
                    <p>I'm a 24 year old with a passion for developing web and mobile applications. </p>
                    <p>Originally from India, I moved to Boston 2 years ago to pursue a Master's degree in Computer Science.</p>
                    <p>I'm looking to leverage my technical skills to solve challenging problems.</p>

                    <p>Click <span id={"click"} onClick={openChatBot}>here</span> to know more about me from my chatbot.</p>

                    <a className="mailto" href="mailto:swetha95@bu.edu"><button id="contact" type="button" className="btn btn-primary btn-lg">Contact Me</button></a>

                    <div id={"chatbot_img"}>

                    <img src={"https://www.cleanlink.com/resources/editorial/2019/robot-24906.png"}></img>

                    </div>

                    {/*<div className="images">*/}
                    {/*    <img src={reactLogo} className="skillLogo" id="react" alt="reactLogo"/><br/>*/}
                    {/*    <img src={angularLogo} className="skillLogo" id="angular" alt="angularLogo"/><br/>*/}
                    {/*    <img src={javascriptLogo} className="skillLogo" id="javascript" alt="javascriptLogo"/><br/>*/}
                    {/*</div>*/}

                </div>

                {/*<Botui id="botui" ref={ cmp => this.botui = cmp } />*/}
                {/*<div className="images">*/}
                {/*    <img src={reactLogo} className="skillLogo" id="react" alt="reactLogo"/><br/>*/}
                {/*    <img src={angularLogo} className="skillLogo" id="angular" alt="angularLogo"/><br/>*/}
                {/*    <img src={javascriptLogo} className="skillLogo" id="javascript" alt="javascriptLogo"/><br/>*/}
                {/*</div>*/}

                <div id="myModal" className="modal">
                    <span id="close" className="close">&times;</span>
                    <div className={"desc"} id={"title_modal"}><Botui id="botui" ref={ cmp => this.botui = cmp } /></div>
                    <img className="modal-content" id="img01"></img>

                </div>
            </div>


        )
    }
}