import React from 'react'
import './_trending.scss'
import NewsLinkTag from '../../../../components/global/newsLinkTag'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Autoplay } from 'swiper';
import AuthorDateRead from '../../../News/components/author-date-readTime';
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

const Trending = ({details}) => {
  const customAnimation=CustomAnimation(hidden,visible,.2);
    return (
        <>

          <motion.div ref={customAnimation.ref} animate={customAnimation.animation} className="trending-wrapper">
              <h3 className="trending-wrapper-head1">Whats Trending Today</h3>
              <h6 className="trending-wrapper-head2">People Love It</h6>

              <Swiper
                loop={true}
                speed={800}  
                slidesPerView={4}
                slidesPerGroup={4}
                spaceBetween={15}
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                  }} 
                  breakpoints={{
                    "200": {
                      "slidesPerView": 1,
                    },
                    "500": {
                      "slidesPerView": 1,
                    },
                    "768": {
                      "slidesPerView": 2,
                    },
                    "1026": {
                      "slidesPerView": 4,
                    }
                  }}
               >
                {details.map(data=>(
                     <SwiperSlide key={data.id}> 
                     <div className="trending-wrapper-content">
                        <div className="trending-wrapper-slide">
                          <div  className="trending-wrapper-slide-img" style={{backgroundImage:`url(${data.bgImage})`}}>
                              <div className="trending-wrapper-slide-img-icon">
                                {data.newsPlay}
                                {data.rating}
                              </div>
                          </div>
                          <div className="trending-wrapper-slide-tag">
                             <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} className="TodaysHighlights-wrapper-slider-slide-description-tag"/>
                          </div>
                          <h3 className="trending-wrapper-slide-head"><a href={data.headinglink}>{data.heading}</a></h3>  
                          <AuthorDateRead date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} className="TodaysHighlights-wrapper-slider-slide-description-dateread"/> 
                      </div> 
                      </div>
                     </SwiperSlide>

                ))}
            
               </Swiper>
    
          </motion.div>
            
        </>
    )
}

export default Trending
