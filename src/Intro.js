import React from 'react';
import me from './images/me.jpg';
import me2 from './images/me2.jpg';
import Skills from './Skills.js';
import linkedinLogo from './images/linkedinLogo.png';
import facebookLogo from './images/facebookLogo.png';
import instagramLogo from './images/instagramLogo.png';
import './stylesheets/skills.css';
import './stylesheets/portfolio.css';
import './stylesheets/timeline.css';
import Footer from './Footer.js';
import Botui from 'botui-react';


export default class Intro extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="container1">
                <div className={"cont_flex"}>
            <div id="intro">
                <div className="name">
                <h1 id="my_name">SWETHA PAI</h1>
                <h3>Master's in Computer Science</h3>
                <h3>Boston University</h3>
                    {/*<a className="mailto" href="mailto:swetha95@bu.edu"><button id="contact" type="button" className="btn btn-primary btn-lg">Contact Me</button></a>*/}

                <img id="photo" src={me2} alt={"This is me"}/>
                </div>
                <Skills/>
            </div>

                {/*<div id="space"></div>*/}







                <div id="timeline-content">
                    {/*<h1>Timeline</h1>*/}

                    <ul className="timeline">
                        <li className="event" data-date="July 1995">
                            <h3>Born</h3>
                            <p>HELLO WORLD! <span>&#128118;&#127995;</span></p>
                        </li>
                        <li className="event" data-date="May 2017">
                            <h3>Graduated from Ramaiah Institute of Technology</h3>
                            <p>B.E-Information Science</p>
                        </li>
                        <li className="event" id="date" data-date="June 2017">
                            <h3>Software Engineer at Shell</h3>
                            <p></p> <p>Java Developer for 'Trade & Supply'</p>
                        </li>

                        <li className="event" data-date="Sept 2018">

                            <h3>Started Master's Program at Boston University</h3>

                            <p>MS in Computer Science</p>

                        </li>

                        <li className="event" data-date="May 2019">

                            <h3>Intern at VODA.ai</h3>

                            <p>Full Stack Development Intern‍</p>

                        </li>

                        <li className="event" data-date="May 2020">

                            <h3>Expected Graduation</h3>

                            <p>Boston University</p>

                        </li>

                        {/*<p>🎓🤓📚👩‍💻</p>*/}


                    </ul>
                </div>

                </div>








                <Footer />


            </div>

        );
    }
}