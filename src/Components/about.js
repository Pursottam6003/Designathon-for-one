import React, { Component } from "react"
import Profile from "../../src/images/logo/sir.jpeg"
import Daknya from "../../src/images/daknya.jpeg"
import Chandrashaker from "../../src/images/tripathi.jpeg"
import puru from "../../src/images/shah.jpeg"


export class About extends Component {
    render() {
        return (
            <div className="about-component route">
                <div className="container">
                    <header className="page-header">
                        <h1 className="heading">About us</h1>
                    </header>
                    <div className="about-technodaya">
                        <p> Technodaya is bimonthly magazine. This magazine contains all the activities held in the institute (i.e national institute of technology , jote , Arunchal Pradesh) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, dignissimos a? Quaerat dignissimos corporis quia possimus, totam nulla perspiciatis reiciendis. Eos, optio odit!</p></div>
                    <div className="about-team">
                        <div className="team-heading"> <h1>EDITORIAL TEAM</h1></div>
                        <div className="team-member-card">
                            <div className="member-image"> <img src={Profile}></img></div>
                            <div className="member-info"><h3> Dr K. Vijaykumar</h3>
                                <p><i> Editor in chief</i></p>
                                <p>Assistant Professor, Management & Humanities NIT AP and He is a  speaker, a listener, a demonstrator, and most of all, an influencer. He ia a teacher which is passionate, compassionate, dedicated, understanding, and supportive when it comes to their jobs and their students..</p>
                                <ul>
                                        <li><a href="https://www.linkedin.com/in/vijayakumar-kathirvel-75ab64143/"><img src="https://img.icons8.com/fluent/40/000000/linkedin-circled.png"/> </a></li>
                                        <li><a href="https://www.facebook.com/kapvijayakumar"><img src="https://img.icons8.com/fluent/40/000000/facebook-new.png"/></a></li>
                                        <li><a href="https://www.instagram.com/vijayakumarkathirvel/"><img src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-heading"> <h1> DEVELOPER </h1></div>
                        <div className="chutiyas">
                           
                            <div className="team-member-card">


                                <div className="member-image"> <img src={Chandrashaker}></img></div>
                                <div className="member-info"><h3> Chandrashaker Tripathi</h3>
                                    <p><i> Full Stack Developer </i></p>
                                    <p> A passionate developer who is completely open to learn new technologies and help  his friends in working under tough conditions</p>
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/chandrashekhar-tripathi-1aa1a6201/"><img src="https://img.icons8.com/fluent/40/000000/linkedin-circled.png"/> </a></li>
                                        <li><a href="https://github.com/tripathics/"><img src="https://img.icons8.com/clr-gls/40/000000/github--v1.png"/></a></li>
                                        <li><a href="https://www.instagram.com/c_strip.z/"><img src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-member-card">


                                <div className="member-image"> <img src={puru}></img></div>
                                <div className="member-info"><h3> Pursottam Sah</h3>
                                    <p><i> Back-end,database </i></p>
                                    <p>Future CEO ,Computer Sciecne undergratuate student who is currenlty exploring all fields and also a coder who is working together in a team </p>
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/pursottam-sah-78aa4a1bb/"><img src="https://img.icons8.com/fluent/40/000000/linkedin-circled.png"/> </a></li>
                                        <li><a href="https://github.com/Pursottam6003"><img src="https://img.icons8.com/clr-gls/40/000000/github--v1.png"/></a></li>
                                        <li><a href="https://www.instagram.com/rahulsah6003/"><img src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-member-card">
                                <div className="member-image"> <img src={Daknya}></img></div>
                                <div className="member-info"><h3> Daknya bam</h3>
                                    <p><i> Font-end, UI-UX </i></p>
                                    <p> A coder. singer,guitarist a full pack of combination of computer science undergratuate </p>
                                    <ul>
                                        <li><a href=""><img src="https://img.icons8.com/fluent/40/000000/linkedin-circled.png"/> </a></li>
                                        <li><a href="https://github.com/daknya"><img src="https://img.icons8.com/clr-gls/40/000000/github--v1.png"/></a></li>
                                        <li><a href="https://www.instagram.com/dak.nya/"><img src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}