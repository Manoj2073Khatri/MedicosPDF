import React, { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { sliderSlides } from '../../../../components/constants/mock';
import { Paragraphs } from '../../../../components/global/paragraphs';
import { DisplayTitle } from '../../../../components/global/Titles';

import "./index.scss";

import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Autoplay } from 'swiper';
import SlideCard from '../../../SlideDetail/components/slideCard';
SwiperCore.use([Autoplay]);

const CategorizedSlides = ({details,activeData}) => {
  const handleChange=(data)=>{
    activeData(data)
}
    return (
        <div className="categorized-slide">
            <div className="categorized-slide-container">
                <div className="categorized-slide-container-top">
                    <DisplayTitle type="display3" title="More Decks by Ryan Cromwell" />
                    <div className="button">
                        <h6>See All by Ryan Cromwell</h6>
                        <BsChevronRight className="icon" />
                    </div>
                </div>
                <Swiper
                loop={true}
                speed={800}  
                spaceBetween={60}
                slidesPerView={4}
                autoplay={{
                    "delay": 6000,
                    "disableOnInteraction": false
                  }} 

                  breakpoints={{
                    "200": {
                      "slidesPerView": 1,
                    },
                    "500": {
                      "slidesPerView": 2,
                    },
                    "768": {
                      "slidesPerView": 2,
                    },
                    "1026": {
                      "slidesPerView": 3,
                    }
                  
                    
                  }}
                  navigation={{
                    nextEl: '.swiper-button-nextCs',
                    prevEl: '.swiper-button-prevCs',
                }}
                className="categorized-slide-container-swiper"
               >
                {details.filter((data,index)=>index<3).map((data,index)=>(
                    <SwiperSlide key={index} onClick={()=>handleChange(data)}  className="categorized-slide-container-swiper-slide">
                        <SlideCard
                            title={data.slideCategory}
                            description={data.SlideName}
                            images={data.slideImages}
                          />
                                    
                    </SwiperSlide>
                ))}
                    <div className="swiper-button-prevCs"><FaArrowLeft /></div>
                    <div className="swiper-button-nextCs"><FaArrowRight /></div>

              </Swiper>
            </div>
        </div>
    )
}

export default CategorizedSlides
