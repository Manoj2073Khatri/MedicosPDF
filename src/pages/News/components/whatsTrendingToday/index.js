import React from 'react'
import './_whatsTrendingToday.scss'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../author-date-readTime'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

const WhatsTrendingToday = ({details}) => {
    return (
        <>

          <div className="newsWhatsTrendingToday-wrapper">
              <h3 className="newsWhatsTrendingToday-wrapper-head1">What's trending today</h3>
              <h6 className="newsWhatsTrendingToday-wrapper-head2">PEOPLE LOVE IT</h6>

              <Swiper
                loop={true}
                speed={800}  
                spaceBetween={15}
                slidesPerView={4}
                slidesPerGroup={4}
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
                      "slidesPerView": 4,
                    }
                  }}  
                  className="newsWhatsTrendingToday-wrapper-swiperContainer"
               >
                {details.map(data=>(
                     <SwiperSlide key={data.id}> 
                        <div className="newsWhatsTrendingToday-wrapper-slide">
                          <div  className="newsWhatsTrendingToday-wrapper-slide-img" style={{backgroundImage:`url(${data.bgImage})`}}>
                              <div className="newsWhatsTrendingToday-wrapper-slide-img-icon">
                                {data.newsPlay}
                                {data.rating}
                              </div>
                          </div>
                          <div className="newsWhatsTrendingToday-wrapper-slide-tag">
                             <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} className="TodaysHighlights-wrapper-slider-slide-description-tag"/>
                          </div>
                          <h3 className="newsWhatsTrendingToday-wrapper-slide-head"><a href={data.headinglink}>{data.heading}</a></h3>  
                          <AuthorDateRead date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} className="TodaysHighlights-wrapper-slider-slide-description-dateread"/> 
                      </div> 
                     </SwiperSlide>

                ))}
            
               </Swiper>
    
          </div>
            
        </>
    )
}

export default WhatsTrendingToday
