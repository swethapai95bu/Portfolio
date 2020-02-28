import React from 'react';
import './stylesheets/photography.css';
import flag from './images/flag.jpg';
import carousel from './images/carousel.jpg';
import lamp from './images/lamppost.jpg';
import guest from './images/guest.jpg';
import citylights from './images/citylights.jpg';
import bcommon from './images/bostoncommon.jpg';
import skies from './images/skies.jpg';
import bench from './images/bench.jpg';
import fall from './images/fall.jpg';
import nh from './images/nh.jpg';
import cic from './images/CIC.JPG';
import logs from './images/logs.jpg';
import Footer from './Footer.js';
import aligned from './images/aligned.jpg';
import fountain from './images/fountain.jpg';
// import building from './images/building.jpg';
import shackles from './images/shackles.jpg';

export default class Photography extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        function handleClick(e) {
            let img = document.getElementById(e.target.id);

            let modal = document.getElementById('myModal');
            let modalImg = document.getElementById("img01");
            let captionText = document.getElementById("caption");

            modal.style.display = "block";
            modalImg.src = img.src;
            console.log(e.target.id);
            captionText.innerHTML = img.alt;


            modal.onclick = function () {
                modal.style.display = "none";
            }
        }

        return (
            <div className={"photo_container"}>

                <div className={"photo_flex"}>
                    <img className={"pictures"} src={nh} id="img1" onClick={handleClick} alt="Mother nature spraying color into our lives! (New Hampshire - Oct '19)"></img>
                    <img className={"pictures"} src={logs} id="img2" onClick={handleClick} alt={"Gas Works Park (Seattle - Sept '19)"}></img>

                    {/*<img className={"pictures"} src={bench}></img>*/}
                    <img className={"pictures"} src={lamp} onClick={handleClick} id={"img3"} alt={"Nothing like blue skies"}></img>
                    <img className={"pictures"} src={bcommon} onClick={handleClick} id={"img7"} alt={"Boston Common (Feb '20)"}></img>

                    <img className={"pictures"} src={flag} onClick={handleClick} id={"img5"} alt={"Boston Harbor"}></img>
                    <img className={"pictures"} src={carousel} onClick={handleClick} id={"img6"} alt={"Spinning in the void"}></img>
                    <img className={"pictures"} src={citylights} onClick={handleClick} id={"img4"} alt={"City Lights!"}></img>
                    {/*<img className={"pictures"} src={cic}></img>*/}
                    <img className={"pictures"} src={guest} onClick={handleClick} id={"img8"} alt={"Only a guest!"}></img>

                    <img className={"pictures"} src={skies} onClick={handleClick} id={"img9"} alt={"Unusual skies"}></img>
                    <img className={"pictures"} src={fountain} id="img21" onClick={handleClick} alt={"A content summer evening"}></img>
                    <img className={"pictures"} src={aligned} onClick={handleClick} id={"img11"} alt={""}></img>

                    <img className={"pictures"} src={shackles} id="img20" onClick={handleClick} alt={"Shackles of society"}></img>
                    <img className={"pictures"} src={fall} onClick={handleClick} id={"img10"} alt={"Favorite place on the BU campus during the favorite time of the year"}></img>


                </div>

                <div id="myModal" class="modal">
                    <div id="caption"></div>
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01"></img>

                </div>

                <Footer />

            </div>
        )
    }
}