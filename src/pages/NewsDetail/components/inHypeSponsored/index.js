import React from 'react'
import './_inHypeSponsored.scss'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../../../News/components/author-date-readTime'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

const InHypeSponsored = ({details}) => {
    return (
        <>
        <div className="newsDetailInHypeSponsoredWrapper">
            {/* <h3 className="newsDetailInHypeSponsoredWrapper-head">Inhype Sponsored</h3> */}
            <Swiper
                loop={true}
                speed={800}
                slidesPerView={1}
                centeredSlides={true}      
                autoplay={{
                    "delay": 4000,
                    "disableOnInteraction": false
                  }} 
                  className="newsDetailInHypeSponsoredWrapper-swiperContainer"
           >
               {details.map(data=>(
                    <SwiperSlide key={data.id} className="newsDetailInHypeSponsoredWrapper-swiperContainer-slide">
                        <div className="newsDetailInHypeSponsoredWrapper-swiperContainer-slide-wrapper">
                            <div className="newsDetailInHypeSponsoredWrapper-swiperContainer-slide-wrapper-img" style={{ backgroundImage: `url(${data.bgImage})` }}>
                                <div className="newsDetailInHypeSponsoredWrapper-swiperContainer-slide-wrapper-img-rating">
                                {data.rating}
                                </div>
                                <div className="newsDetailInHypeSponsoredWrapper-swiperContainer-slide-wrapper-img-description">
                                    <NewsLinkTag color={data.tags.color} tag={data.tags.tag} link={data.tags.link} />
                                    <h3 className="newsDetailInHypeSponsoredWrapper-swiperContainer-slide-wrapper-img-description-head"><a href={data.headinglink}>{data.heading}</a></h3>
                                    <AuthorDateRead  date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                              </div>
                            </div>
                           
                        </div>
                    </SwiperSlide>
               ))}
              
            </Swiper>
        </div>
            
        </>
    )
}

export default InHypeSponsored
