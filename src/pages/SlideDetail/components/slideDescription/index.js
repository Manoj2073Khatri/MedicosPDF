import React, { useState } from 'react';
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { Headings } from '../../../../components/global/headings';
import { Paragraphs } from '../../../../components/global/paragraphs';
import { DisplayTitle } from '../../../../components/global/Titles';
import "./index.scss";
const SlideDescription = () => {
    return (
        <div className="slide-description">
            <div className="slide-description-container">
                <DisplayTitle type="display3" title="Making the Leap to Tech Lead" />
                <Paragraphs className="paragraph" color="gray" content="

You’re a solid developer. You’ve built software people use, and it works well for them. Now, you want that next step—to lead a team that builds software.

Over nearly 20 years in this industry, I’ve acted as a Tech Lead many times, mentored dozens of developers towards technical leadership roles, and regularly worked with companies to hire and develop technical leaders.

In this talk, I’ll share the traits, skills, and experiences that shape a successful Tech Lead. We’ll talk about how a Tech Lead empowers and unlocks a team through communication, leadership, technical skill, and impact. We’ll look at what it means to manage yourself and the vital role a Tech Lead plays in building the right thing. We’ll also look at opportunities to grow your Tech Lead skills before you make the jump and how to show your boss that you’re ready.
"/>
                <div className="slide-description-container-bottom-container">
                    <div className="row1">
                        <div className="userInfo">
                            <img className="profilePic" src={require("../../../../assets/images/profile3.png").default} />
                            <div className="name">
                                <Headings type="heading5" content="Jessica Doe" />
                                <p>October 01, 2019 </p>
                            </div>
                        </div>
                        <div className="button-container">
                            <div className="tweet">
                                <FiTwitter className="icon" />
                                <Headings type="heading6" content="Tweet" />
                            </div>
                            <div className="share">
                                <FiFacebook className="icon" />
                                <Headings type="heading6" content="Share" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideDescription
