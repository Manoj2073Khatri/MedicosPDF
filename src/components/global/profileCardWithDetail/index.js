import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall, faCog, faCaretDown, faUserGraduate, faSmile, faListUl } from '@fortawesome/free-solid-svg-icons';

import {
    faFacebook, faTwitter, faGithub, faInstagram, faLinkedin, faPinterest, faYoutube, faSlack, faReddit, faDribbble, faVimeo, faTumblr
} from '@fortawesome/free-brands-svg-icons';
import "./_profileCardWithDetail.scss";

const ProfileCardWithDetail = ({profileImage, userName, description, level}) => {

    return (
       <div className={`profile-card-with-detail-container`}>
            <div className={`profile-card-with-detail-container-wrapper`}>
            <div className="profile-card-with-detail-container-wrapper-picture" style={{backgroundImage: `url(${profileImage.default})`}}>
                <h5 className="text">{userName}</h5>
            </div>
            <div className={`profile-card-with-detail-container-wrapper-content`}>
                <h5>{level}</h5>
                <p>{description}</p>
                <div className={`profile-card-with-detail-container-wrapper-footer`}>
                    <FontAwesomeIcon className="profile-card-with-detail-container-wrapper-footer-icon1 icon" icon={faInstagram} />
                    <FontAwesomeIcon className="profile-card-with-detail-container-wrapper-footer-icon2 icon" icon={faTwitter} />
                    <FontAwesomeIcon className="profile-card-with-detail-container-wrapper-footer-icon3 icon" icon={faBaseballBall} />
                </div>

            </div>
        </div>
       </div>

    )
}

export default ProfileCardWithDetail
