import React, { useState } from 'react';
import { RiShareForwardFill } from "react-icons/ri";
import { CgSoftwareDownload } from "react-icons/cg";
import {AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { Paragraphs } from '../../../../components/global/paragraphs';
import { Headings } from '../../../../components/global/headings'
import { Link } from "react-router-dom";
import "./index.scss";

const SlideCard = ({title,description,images}) => {
    let dividedPortion = 100 / images.filter((data,index)=>(index<5))?.length;
    const [activeSlide, setActiveSlide] = useState(0);
    // const [onHover, setOnHover] = useState(0);
    const [progressValue, setProgressValue] = useState(dividedPortion);

    const progressPercentage = (event) => {
        let elementWidth = event.currentTarget.offsetWidth;
        let widthPercentage = (event.nativeEvent.offsetX / elementWidth) * 100;
        if (widthPercentage >= (dividedPortion * (activeSlide + 1))) {
            if (activeSlide < images?.length - 1) {
                setActiveSlide(activeSlide + 1);
                setProgressValue((activeSlide + 2) * dividedPortion)
            }

        } else if (widthPercentage < (dividedPortion * (activeSlide))) {
            if (activeSlide > 0) {
                setActiveSlide(activeSlide - 1);
                setProgressValue((activeSlide) * dividedPortion)
            }

        }
    }
    
    return (
                <div className="slide-card">
                    <div
                        className="slide-card-image-container"
                        onMouseOut={() => setActiveSlide(0)}
                        onMouseMove={(event) => progressPercentage(event)}
                    >
                
                        {images?.map((image, index) => {
                            if (activeSlide == index) {
                                return <img
                                    key={index}
                                    src={image}
                                    className="slide-card-image"
                                />
                            }
                        })}
                    
                        <div className="progress-indicator-container">
                            <div className="progress-indicator-container-active" style={{ width: progressValue + "%" }}></div>
                        </div>
                    </div>
                    <div className="slide-card-bottom">
                        <div className="description">
                            <div className="title">
                                <Headings type="heading5" content={title} />
                            </div>
                            <Paragraphs content={description} />
                        </div>
                        <div className="slide-info">
                            <div className="left">
                                <div className="userInfo">
                                    <img className="profilePic" src={require("../../../../assets/images/profile3.png").default} />
                                    <Headings type="heading7" content="Jessica Doe"/>
                                    {/* <h7>Jessica Doe</h7> */}
                                </div>
                            </div>
                            <div className="right">
                                <div className="star">
                                    <AiOutlineStar className="icon" />
                                    <p>107</p>
                                </div>
                                <div className="view">
                                    <AiOutlineEye className="icon" />
                                    <p>107</p>
                                </div>
                                <CgSoftwareDownload className="downloadIcon" />
                                <RiShareForwardFill className="shareIcon" />
                            </div>

                        </div>
                    </div>

                </div>
    )
}

export default SlideCard;
