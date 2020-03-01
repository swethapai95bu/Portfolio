import React from 'react';
import './stylesheets/project.css';


export default class Resume extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        function showDesc(event, props) {
            let img = document.getElementById(event.target.id);

            let modal = document.getElementById('myModal');


            let modalImg = document.getElementById("img01");
            let date = document.getElementById("date");
            let desc = document.getElementById("desc");
            let tech = document.getElementById("tech");
            let title = document.getElementById("title_modal");
            let repo = document.getElementById("repo");
            debugger;


            if(props.id=="roomit") {
                modalImg.style.height = "500px";
                modalImg.style.width = "300px";
            }
            else
                modalImg.style.width = "80%";

            modal.style.display = "block";
            modalImg.src = img.src;
            date.innerHTML= "<b>Date:</b> "+props.date;
            desc.innerHTML= "<b>Description:</b> "+props.description;
            tech.innerHTML= "<b>Technologies:</b> "+props.tech;
            title.innerHTML = props.title;
            if(props.repo!=undefined)
            repo.innerHTML= "<b>Repository:</b> "+props.repo;
            else
                repo.innerHTML = "";

            modal.onclick = function () {
                modal.style.display = "none";
            }
        }

        return (

            <div className={"project_container"}>


                <div className="proj_desc">
                    <div className="card">
                    <img src={this.props.image} className={"screenshot"} onClick={(e)=> showDesc(e, this.props)} id={this.props.id}></img>
                        <div className="container">
                            <h4><b>{this.props.title}</b></h4>
                        </div>
                    </div>

                    <div id="myModal" className="modal">
                        <span className="close">&times;</span>
                        <div className={"desc"} id={"title_modal"}></div>
                        <img className="modal-content" id="img01"></img>

                        <div className={"desc"}>
                            <p id={"desc"}><b>Description: </b></p>
                            <p id={"tech"}><b>Technologies used: </b></p>
                            <p id={"date"}><b>Date: </b></p>
                            <p id={"repo"}><b>Repository: </b></p>
                        </div>

                    </div>

                </div>
            </div>
        )
}
}