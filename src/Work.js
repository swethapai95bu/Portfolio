import React from 'react';
import './stylesheets/work.css';
import vodalogo from './images/voda-ai-logo.png';
import shelllogo from './images/shell.png';
import hexagon from './images/hexagon.jpeg';
import Project from './Projects.js';
import chatbot from './images/chatbot.png';
import Footer from './Footer.js';
import banking from './images/banking.png';
import roomit from './images/roomit.png';
import resfinder from './images/res_finder.png';
import diary from './images/Diary.png';
import planner from './images/python.png';

export default class Resume extends React.Component {

    render() {

        return (
            <div>
           <div className={"main_container"}>
               <h2 className={"title"}>Work experience</h2>
               <div className={"work_ex"}>
                   <div id={"voda"} className={"work_desc"}>
                       <div className={"company"}>
                       <a href={"https://voda.ai/"}><img className="logo" src={vodalogo}></img></a>
                       <div className={"role"}>
                           <b>VODA.ai</b>
                           <p>Full Stack Development Intern</p>
                       </div><br/>
                       </div>
                       <div>
                           During the summer of 2019, I had the opportunity to work at VODA.ai, a startup that aims to prevent water losses by using Artificial Intelligence to detect likelihood of failure of pipes.
                           I worked as a Full Stack Developer in the Software Engineering team and was involved in revamping the user interface of the company software using React, JavaScript, NodeJS and MongoDB. This reduced the time taken to build client applications by over 3 hours.
                           <br/><br/>
                           Implementing such a big chunk of the project gave me a chance to hone my skills and also learn new technologies. Involvement in setting up servers, deploying applications, maintaining the code base and monitoring the applications has led me gain a diverse set of skills required to build full-fledged scalable web applications.
                           <br/><br/>
                           I thoroughly enjoyed my time at the company during which I got to learn a lot not just about my field but about startups and various other things. I had the privilege of working with a renowned set of people coming together to make a difference with technology.
                       </div>
                   </div>

                   <div id="shell" className={"work_desc"}>
                       <div className={"company"}>
                       <a href={"https://www.shell.com/"}><img className="logo" id="shell_logo" src={shelllogo}></img></a>
                       <div className={"role"}>
                           <b>Shell</b>
                           <p>Software Engineer</p>
                       </div>
                       </div>
                       <div>
                           Fresh out of college, I started working at the IT hub of Shell as a Software Engineer in the 'Trade and Supply' department. I was a Java Developer responsible for supporting Endur which is an energy and commodities trading software. I underwent training for the first few weeks where I learnt about the tech stack, the databases, the code base and the tools used by the team.
                           <br/><br/>
                           During my time at the company, I got an opportunity to work on several challenging projects which included improving accuracy of the Deal Mature task, automating configurations from one Endur environment to the other, enhancing features of the GUI used to book trades etc. I received recognitions for my contributions to these tasks.
                           <br/><br/>
                           I was fortunate to have worked at a company such as Shell where I got to interact with highly intellectual and motivated team members. It not only made me a proficient programmer but gave me an insight into the workings of the industry and strengthened my desire to pursue a Master's degree in the field of Computer Science.

                       </div>
                   </div>

                   <div id={"hexagon"} className={"work_desc"}>
                       <div className={"company"}>
                       <a href={"https://www.hexagonglobal.in/"}><img className="logo" id="hexagon_logo" src={hexagon}></img></a>
                       <div className={"role"}><b>Hexagon Global Pvt. Ltd.</b>
                           <p>Software Engineer Intern</p>
                       </div>
                       </div>
                       <div>
                           While I was in my fourth year of Engineering, I wanted to gain some practical exposure and so I sought out some internships and landed up with one that I found very exciting. At Hexagon Global, I designed and developed an android based ticket booking system in a team of two under the guidance of the project manager. This was my first experience with building a mobile application and I absolutely loved working on it. The application was built using NativeScript and Angular 2 and allowed users to view theatres around them, select seats and reserve movie tickets.
                           <br/><br/>
                           After the internship I keenly continued to learn more about Mobile Application Development and also took part in a month-long workshop conducted by Google on Android Development.
                       </div>
                   </div>
               </div>

               <div>
                   <h2 className={"title"}>Projects</h2>
                   <div id={"project_flex"}>
                       <Project title={"Banking Application using Builder Pattern"} image={banking} date="Fall 2019"
                                description={"The banking application aims to create bank accounts for customers and also manage their credit card and debit card transactions.\n" +
                                "The program determines if a customer is eligible to hold an account based on certain criteria and will assign savings and checking accounts. " +
                                "A credit card with a certain credit limit and a debit card will also be attributed to the customer. The customer can perform operations such as payment with cards, transferring money, redeeming cashback, paying off credit card etc. " +
                                "The application has been implemented in Java using several design patterns such as Builder Pattern, Visitor Pattern, Observer Pattern and Strategy Pattern."} tech={"Java"} repo={"https://github.com/swethapai95bu/Banking-Application"} id={"bank"}/>
                       <Project title={"Restaurant Finder - MEAN stack application"} image={resfinder} id="resfind"
                                description={"This is a web based application that enables users to search for restaurants around them. " +
                                "The user can also rate, review, add to wish list and categorize the restaurants of their choice. The application was built using MEAN stack with the help of the Zomato API to retrieve the details of restaurants."}
                                tech={"Angular, NodeJS, MongoDB, Express"} date={"Spring 2019"}/>
                       <Project title={"Android Application for Roommates"} image={roomit}  id={"roomit"}/>
                       <Project title={"Chatbot for Smartwatch data"} image={chatbot} id="chatbot" />
                       <Project title={"Course Planner for graduate school"} image={planner}  id={"journal"}/>
                       <Project title={"Online Diary for daily journaling"} image={diary}  id={"diary"}/>

                   </div>
               </div>

           </div>

               <Footer />

            </div>
    )
    }
}