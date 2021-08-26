import React from 'react'
import './_bookTrending.scss'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import BookStackCard from '../bookStackCard';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const BookTrending = ({details}) => {
    return (
        <>
           <div className="bookTrending-container">
            <h3>Book Trending</h3>
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
                      "slidesPerView": 2,
                    },
                    "1026": {
                      "slidesPerView": 4,
                    }
                  }}
                navigation={{
                    nextEl: '.swiper-button-nextBt',
                    prevEl: '.swiper-button-prevBt',
                }}
                className="bookTrending-container-swiper"
            >
                {details.map(data => (
                    <SwiperSlide key={data.id} className="bookTrending-container-swiper-slide">
                        <BookStackCard
                              bookImage={data.bookImg}
                              title={data.title}
                              authorInfo={data.authorInfo}
                              rating={data.rating}
                              views={data.views}
                          />
                    </SwiperSlide>
                ))}


                <div className="swiper-button-prevBt"><FaChevronLeft /></div>
                <div className="swiper-button-nextBt"> <FaChevronRight /></div>

            </Swiper>
        </div>
            
        </>
    )
}

export default BookTrending
