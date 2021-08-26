import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../author-date-readTime'
import './_todayHighlights.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Autoplay } from 'swiper';
import { motion } from 'framer-motion';

import CustomAnimation from '../../../customAnimation/index'

const hidden={
  opacity:0,
  y:100,
}
const visible={
  opacity:1,
  y:0,
  transition:{
      delay:.3,
      ease:'easeIn'
  }
 }


SwiperCore.use([Autoplay]);

const TodayHighlights = ({details}) => {
  const customAnimation=CustomAnimation(hidden,visible,.1);
    return (
        <div ref={customAnimation.ref}>
        <motion.div animate={customAnimation.animation}  className="TodaysHighlights-wrapper">

            <h3 className="TodaysHighlights-wrapper-head1">Today Highlights</h3>
            <h6 className="TodaysHighlights-wrapper-head2">TOP OF THE WEEK</h6>

       
             <Swiper
                loop={true}
                speed={800}  
                spaceBetween={15}
                slidesPerView={5}
                autoplay={{
                    "delay": 3000,
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
                      "slidesPerView": 3,
                    },
                    "1026": {
                      "slidesPerView": 5,
                    }
                  }}
               >
                {details.map(data=>(
                     <SwiperSlide key={data.id}> 
                        <div className="TodaysHighlights-wrapper-slider-slide">
                            <div className="TodaysHighlights-wrapper-slider-slide-img" style={{backgroundImage:`url(${data.bgImage})`}}>

                            </div>
                            <div className="TodaysHighlights-wrapper-slider-slide-description"> 
                                <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                <h3 className="TodaysHighlights-wrapper-slider-slide-description-head"><a href={data.headinglink}>{data.heading}</a></h3>  
                                <AuthorDateRead date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                            </div>
                        </div>
                     </SwiperSlide>

                ))}
                   

             
                   
                    
               </Swiper>
            </motion.div>
            
        </div>
    )
}

export default TodayHighlights
