import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Resume from './Resume';
import Intro from './Intro.js';
import Photography from "./Photography";
import Work from "./Work";

function changeColor(event) {
    debugger;
    let element = document.getElementById(event.target.id);
    console.log(event.target);
    // element.style.color = "#b30000";
    // element.style.borderBottom = "0.3px solid black";
}


function AppRouter() {

    return (
        <Router>
            <div id="menu">
                <nav>
                    <Link onClick={changeColor} id="home" to="/" className="item">Home</Link>

                    <Link onClick={changeColor} id="resume" to="/resume/" className="item">Resume</Link>

                    <Link id="work" to="/work/" className="item">Work so far</Link>

                    <Link id="photography" to="/photography/" className="item">Photography</Link>


                </nav>

                <Route path="/" exact component={Intro} />
                <Route path="/resume/" component={Resume} />
                <Route path="/photography/" component={Photography} />
                <Route path="/work/" component={Work} />
            </div>
        </Router>
    );
}

export default AppRouter;