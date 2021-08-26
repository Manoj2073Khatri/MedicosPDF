import React from 'react'
import './_blogCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'


const BlogCard = () => {
    return (
        <>
           <div className="blogCard-container">
           <div className={`blogCard-container-wrapper`}>
                    <div className={`blogCard-container-wrapper-topic`}>
                        <FontAwesomeIcon className="icon" icon={faGift} />
                        <p>Features</p>
                    </div>
                    <div className={`blogCard-container-wrapper-content`}>
                        <h5>FiftyThree Files For Paper</h5>
                        <p>Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...</p>
                    </div>
                    <div className={`blogCard-container-wrapper-footer`}>
                        <div className="blogCard-container-wrapper-footer-user-info">
                            <img className="blogCard-container-wrapper-footer-user-info-picture" alt='some img' src={require("../../../assets/images/profile1.png")?.default} />
                            <div className="blogCard-container-wrapper-footer-user-info-text">
                                <p>Johana Doe</p>
                            </div>
                        </div>
                        <div className="blogCard-container-wrapper-footer-button-container">
                            {/* <FontAwesomeIcon className="icon" icon={faBookmark} /> */}
                            <div className="heart">
                                <FontAwesomeIcon className="icon" icon={faHeart} />
                                <p>10.4k</p>
                            </div>
                            <div className="bag">
                                <FontAwesomeIcon className="icon" icon={faShoppingBag} />
                                <p>425</p>
                            </div>

                        </div>
                    </div>
                </div>
                
           </div>    
        </>
    )
}

export default BlogCard