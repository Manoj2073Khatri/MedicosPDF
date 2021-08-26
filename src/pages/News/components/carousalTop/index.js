import React, { useState, useEffect } from 'react'
import './_carousalTop.scss'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Autoplay, Controller } from 'swiper';
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../author-date-readTime';
SwiperCore.use([Autoplay]);
SwiperCore.use([Controller]);

const CarousalTop = ({ details }) => {

    const [count, setCount] = useState(0);
    const [controlledSwiper, setControlledSwiper] = useState(null);

    return (
        <div style={{ position: 'relative' }}>
            <Swiper
                loop={true}
                speed={800}
                activeSlideKey="2"
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    "delay": 4000,
                    "disableOnInteraction": false
                }}
                navigation={{
                    nextEl: '.swiper-button-nextCT',
                    prevEl: '.swiper-button-prevCT',
                }}

                onSlideChange={({ realIndex }) => {
                    setCount(realIndex);
                }}
                className="carousalTop-sliderContainer"
            >
                {details.map((data, index) => {
                    return <SwiperSlide key={index} >
                        <div key={index} className='carousalTop-wrapper' style={{ backgroundImage: `url(${data.backgroundImage})` }}>
                            <div className='carousalTop-wrapper-description'>

                                <div className='carousalTop-wrapper-description-tags'>
                                    {data.tags.map((data, index) => (
                                        <div key={index} className='carousalTop-wrapper-description-tags-tag'>
                                            <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                        </div>
                                    ))}
                                </div>

                                <h3 className='carousalTop-wrapper-description-title'>{data.heading}</h3>
                                <AuthorDateRead author={data.dateAndTime.author} authorColor={data.dateAndTime.authorColor} link={data.dateAndTime.link} date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                            </div>
                        </div>
                    </SwiperSlide>
                }
                )}

                <div className="swiper-button-prevCT"><FaArrowLeft /></div>
                <div className="swiper-button-nextCT"> <FaArrowRight /></div>
            </Swiper>


            <div className='carousalTop-wrapper-Bottom'>
                {details.map((data, index) => (
                    <div key={index} className={`carousalTop-wrapper-Bottom-wrapper carousalTop-wrapper-Bottom-wrapper${data.id} carousalTop-wrapper-Bottom-wrapper carousalTop-wrapper-Bottom-wrapper${count == index ? "-active" : ""}`}>
                        <div className={`carousalTop-wrapper-Bottom-wrapper-Description ${(index == count) ? 'carousalTop-wrapper-Bottom-wrapper-DescriptionActive' : ''}`} >
                            <div className='carousalTop-wrapper-Bottom-wrapper-Description-wrapper'>
                                <div className='carousalTop-wrapper-Bottom-wrapper-Description-wrapper-number' >{data.id}</div>
                                <h4 className='carousalTop-wrapper-Bottom-wrapper-Description-wrapper-heading'>{data.heading}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarousalTop
