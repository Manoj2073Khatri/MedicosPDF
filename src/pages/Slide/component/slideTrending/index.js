import React from 'react'
import './_slideTrending.scss'
import { Link } from 'react-router-dom';
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Autoplay } from 'swiper';
import SlideCard from '../../../SlideDetail/components/slideCard';
SwiperCore.use([Autoplay]);


const SlideTrending = ({details}) => {
    return (
        <>

        <div className="slideTrending-container">
             <h4 className="slideTrending-container-head">Trending</h4>
             <Swiper
                loop={true}
                speed={800}  
                spaceBetween={10}
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
                      "slidesPerView": 3,
                    },
                    "1026": {
                      "slidesPerView": 4,
                    }
                  }}
                  navigation={{
                    nextEl: '.swiper-button-nexttt',
                    prevEl: '.swiper-button-prevvv',
                }}
                  className="slideTrending-container-swiperContainer"
               >
                {details.filter((data,index)=>index<4).map((data,index)=>(
                   
                      <SwiperSlide  key={index}  className="slideTrending-container-swiperContainer-slide">
                          <Link
                              style={{ textDecoration: 'none' }}
                              to={{
                                  pathname: '/slideDetails',
                                  state: {
                                      data: JSON.stringify(data),
                                      wholeData: JSON.stringify(details),
                                      
                                  }
                              }}>
                                <SlideCard
                                    title={data.slideCategory}
                                    description={data.SlideName}
                                    images={data.slideImages}
                                  />
                          </Link>          
                      </SwiperSlide>
                   
                ))}
                    <div className="swiper-button-prevvv"><FaArrowLeft /></div>
                    <div className="swiper-button-nexttt"><FaArrowRight /></div>

              </Swiper>

        </div>       
        </>
    )
}

export default SlideTrending
