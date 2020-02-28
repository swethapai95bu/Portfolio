import React from 'react';
import me from './images/me.jpg';
import Skills from './Skills.js';
import linkedinLogo from './images/linkedinLogo.png';
import facebookLogo from './images/facebookLogo.png';
import instagramLogo from './images/instagramLogo.png';
import './stylesheets/skills.css';
import './stylesheets/portfolio.css';
import Footer from './Footer.js';

export default class Intro extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="container1">
            <div id="intro">
                <div className="name">
                <h1 id="my_name">SWETHA PAI</h1>
                <h3>Master's in Computer Science</h3>
                <h3>Boston University</h3>
                    <a className="mailto" href="mailto:swetha95@bu.edu"><button id="contact" type="button" className="btn btn-primary btn-lg">Contact Me</button></a>

                    {/*<div id="space"></div>*/}
                    <div id="about">

                        <p id={"aboutme"}> Hi, I'm Swetha.  </p>
                        <p> I'm a 24 year old with a passion for developing Web and Mobile Applications. I'm originally from India and now based in Boston.
                        I'm pursuing Master's in Computer Science from Boston University.
                        </p>
                        <p>I'm currently working at VODA.ai as a Web Development Intern. Prior to this, I worked as a Java Developer in India at Shell India Markets Pvt. Ltd.  </p>
                        <p>I'm a CS enthusiast and love designing visually appealing and efficient user interfaces.</p>
                    </div>
                </div>

                <div className="img_div">
                <img id="photo" src={me} alt={"This is me"}/>
                    <div id={"socialmedia"}>Connect with me -
                        <a href="https://www.linkedin.com/in/swethapai1995/"><img className="footerlogo" src={linkedinLogo}/></a>
                        <a href={"https://www.facebook.com/swetha.pai.9"}> <img className="footerlogo" src={facebookLogo}/></a>
                        <a href={"https://www.instagram.com/swetha_pai/"}> <img className="footerlogo" src={instagramLogo}/></a>
                    </div>
                </div>

                <div id="space"></div>

                <Skills/>


            </div>
                {/*<footer>*/}
                {/*    <p>Let's get in touch!</p>*/}
                {/*    <p>Email: <a className="mailto" href="mailto:swetha95@bu.edu">swetha95@bu.edu</a></p>*/}
                {/*    <a href="https://www.linkedin.com/in/swethapai1995/"><img className="footerlogo" src={linkedinLogo}/></a>*/}
                {/*    <a href={"https://www.facebook.com/swetha.pai.9"}> <img className="footerlogo" src={facebookLogo}/></a>*/}
                {/*    <a href={"https://www.instagram.com/swetha_pai/"}> <img className="footerlogo"src={instagramLogo}/></a>*/}
                {/*</footer>*/}

                <Footer />


            </div>

        );
    }
}