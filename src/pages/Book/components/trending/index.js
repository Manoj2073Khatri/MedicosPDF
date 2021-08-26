import React from 'react'
import './_trending.scss'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Autoplay } from 'swiper';
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import BookCard from '../bookCard';
import BookStackCard from '../bookStackCard';

SwiperCore.use([Autoplay]);

const TrendingBook = ({details}) => {
    return (
        <>

          <div className="trendingBook-wrapper">
              <h3 className="trendingBook-wrapper-head1">Trending Books</h3>

              <Swiper
                className="trendingBook-wrapper-container"
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

                     <SwiperSlide key={data.id} > 
                     <div className="trendingBook-wrapper-content">
                        <div className="trendingBook-wrapper-slide">
                        <div className="trendingBook-wrapper-slide-tag">
                             <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                          </div>
                          <div  className="trendingBook-wrapper-slide-img" >
                              <div className="trendingBook-wrapper-slide-img-icon">
                                {data.newsPlay}
                                {data.rating}
                              </div>
                              <BookStackCard
                            bookImage={require("../../../../assets/images/book/book1.jpg")}
                            title='Principles of Genetics'
                            authorInfo='by D. Peter Snustad  (Author), Michael J. Simmons (Author)'
                            rating='4.0'
                            views='5K Views'
                        />
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

export default TrendingBook
