import React from 'react';
import resume from './images/Resume_SwethaPai.pdf';
import './stylesheets/resume.css';
import Footer from './Footer.js';


export default class Resume extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (

            <div className="resumeContainer">

                <iframe id="resume_cont" src={resume} width="100%" height="1000px">
                </iframe>

                <Footer />
            </div>


        )
    }
}