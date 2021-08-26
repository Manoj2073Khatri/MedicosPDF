import React from 'react'
import './_bookSuggestion.scss'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import BookCard from '../bookCard';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const BookSuggestion = ({details}) => {
    return (
        <div className="bookSuggestion-container">
        <h3 className="bookSuggestion-container-head">Book Suggestion of the day</h3>
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
                nextEl: '.swiper-button-nextBs',
                prevEl: '.swiper-button-prevBs',
            }}
            className="bookSuggestion-container-swiper"
        >
            {details.map(data => (
                <SwiperSlide key={data.id}  className="bookSuggestion-container-swiper-slide">
                   <BookCard
                        image={data.bookImg}
                        title={data.title}
                        author={data.authorInfo}
                        rating={data.rating}
                    />

                  
                </SwiperSlide>
            ))}


            <div className="swiper-button-prevBs"><FaChevronLeft /></div>
            <div className="swiper-button-nextBs"> <FaChevronRight /></div>

        </Swiper>
    </div>
    )
}

export default BookSuggestion
