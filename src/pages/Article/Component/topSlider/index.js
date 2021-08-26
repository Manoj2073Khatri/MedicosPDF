import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import './_topSlider.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

 const TopSlider = ({details}) => {
    return (
         <div className="topslider-wrapper">
         
         <div className="topslider">
         <div className="topslider-content">

            <Swiper
                            loop={true}
                            speed={800}
                            slidesPerView={1}
                            centeredSlides={true}      
                            autoplay={{
                                "delay": 4000,
                                "disableOnInteraction": false
                            }} 
                           
                        >
                 {details.map(data=>(

                  <SwiperSlide key={data.id}> 
                       <>
                            <div className="topslider-wrapper-slide">
                                <div className="topslider-wrapper-slide-left">
                                   
                                        <NewsLinkTag key={data.tag.id} color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                        <h3 className="topslider-wrapper-slide-left-head"><a href={data.headinglink}>{data.heading}</a></h3>
                                        <AuthorDateRead  author={data.dateAndTime.author} link={data.dateAndTime.link} date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}  />
                                    

                                </div>
                                <div className="topslider-wrapper-slide-rightImg" style={{backgroundImage:`url(${data.bgImg})`}}>
                
                                </div>
                                
                            </div>
                        </>
                        </SwiperSlide>


                 ))}
</Swiper>
</div>
            </div>
        </div>
    )
}
export default TopSlider