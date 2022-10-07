import React, { Component } from "react"
import Profile from "../../src/images/logo/sir.jpeg"


export class About extends Component {
    render() {
        return (
            <div className="about-component route">
                <div className="container">
                    <div className="about-technodaya">
                        <h1> ABOUT </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, dignissimos a? Quaerat dignissimos corporis quia possimus, totam nulla perspiciatis reiciendis. Eos, optio odit!</p></div>
                    <div className="about-team">
                        <div className="team-heading"> <h1>EDITORAIL TEAM</h1></div>
                        <div className="team-member-card">


                            <div className="member-image"> <img src={Profile}></img></div>
                            <div className="member-info"><h3> vijay bhaiya</h3>
                                <p><i> editor in cheap</i></p>
                                <p> he is a human  sit amet consectetur adipisicing elit. Dicta, dignissimos a? Quaerat dignissimos corporis quia possimus, totam nulla</p>
                                <ul>
                                    <li>linkdin</li>
                                    <li>facebook</li>
                                    <li>instagram</li>

                                </ul>
                            </div>
                        </div>
                        <div className="chutiyas">
                            <div className="team-member-card">


                                <div className="member-image"> <img src={Profile}></img></div>
                                <div className="member-info"><h3> vijay bhaiya</h3>
                                    <p><i> editor in cheap</i></p>
                                    <p> he is a human  sit amet consectetur adipisicing elit. Dicta, dignissimos a? Quaerat dignissimos corporis quia possimus, totam nulla</p>
                                    <ul>
                                        <li>linkdin</li>
                                        <li>facebook</li>
                                        <li>instagram</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="team-member-card">


                                <div className="member-image"> <img src={Profile}></img></div>
                                <div className="member-info"><h3> vijay bhaiya</h3>
                                    <p><i> editor in cheap</i></p>
                                    <p> he is a human  sit amet consectetur adipisicing elit. Dicta, dignissimos a? Quaerat dignissimos corporis quia possimus, totam nulla</p>
                                    <ul>
                                        <li>linkdin</li>
                                        <li>facebook</li>
                                        <li>instagram</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="team-member-card">


                                <div className="member-image"> <img src={Profile}></img></div>
                                <div className="member-info"><h3> vijay bhaiya</h3>
                                    <p><i> editor in cheap</i></p>
                                    <p> he is a human  sit amet consectetur adipisicing elit. Dicta, dignissimos a? Quaerat dignissimos corporis quia possimus, totam nulla</p>
                                    <ul>
                                        <li>linkdin</li>
                                        <li>facebook</li>
                                        <li>instagram</li>

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