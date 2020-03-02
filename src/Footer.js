import React from 'react';
import linkedinLogo from "./images/linkedinLogo.png";
import facebookLogo from "./images/facebookLogo.png";
import instagramLogo from "./images/instagramLogo.png";


export default class Footer extends React.Component{

render() {

    return(

    <div className={"footer_container"}>
    <footer>
        <p>Let's get in touch!</p>
        <p>Email: <a className="mailto" href="mailto:swetha95@bu.edu" target="_blank">swetha95@bu.edu</a></p>
        <a href="https://www.linkedin.com/in/swethapai1995/" target="_blank"><img className="footerlogo" src={linkedinLogo}/></a>
        <a href={"https://www.facebook.com/swetha.pai.9"} target="_blank"><img className="footerlogo" src={facebookLogo}/></a>
        <a href={"https://www.instagram.com/swetha_pai/"} target="_blank"><img className="footerlogo" src={instagramLogo}/></a>
    </footer>
    </div>
    );
}
}