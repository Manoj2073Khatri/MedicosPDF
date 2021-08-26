import React,{useState,useEffect} from 'react';
import CarousalTop from './components/carousalTop';
import "./index.scss";
import { newsArtAndCultureDetails, newsCarousalData, newsCategoriesDetails, newsLastWholeSectionDetails, newsLinksDetails ,newsMoreFromHypeSliderDetails,newsRecentDetailsLeft,newsRecentDetailsRight, newsSelectedDetailsLeft, newsSelectedDetailsRight, newsSelectedPostsDetails, newsTechnologyDetails, newsTodayHighlightsDetails, newsTravelDetails, newsVideoDetailsLeft, newsVideoDetailsRight, newsWhatsTrendingTodayDetails} from '../../components/constants/mock';
import NewsLinks from './components/newsLinks';
import Recent from './components/recent';
import Technology from './components/technology';
import TodayHighlights from './components/todayHighlights';
import ArtAndCulture from './components/artAndCulture';
import Selected from './components/selected';
import Travel from './components/travel';
import Categories from './components/categories';
import MoreFromHypeSlider from './components/moreFromHypeSlider';
import Video from './components/video';
import SelectedPosts from './components/selectedPosts';
import WhatsTrendingToday from './components/whatsTrendingToday';
import LastWholeSection from './components/lastWholeSection';
import { motion } from 'framer-motion';

const variants={
  exit:{
  x:'-100vw',
  opacity:0,
  transition:{
      ease:'easeIn',
      delay:.2,
  }}
}
const News = () => {

 
    const [scrollTop,setScrollTop]=useState(0);
  
    const onScroll=()=>{
      const winScroll=document.documentElement.scrollTop;
      const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  
      const scrolled=(winScroll / height)*100;
      setScrollTop(scrolled);
    }

      useEffect(() => {

      window.addEventListener("scroll",onScroll);
      return()=>window.removeEventListener("scroll",onScroll);
        
      }, [])
  return (
    <>
     
      <motion.div 
      variants={variants}
      exit='exit'
      className="news-page-container">
        <div className="progressBarContainer">
          <div className="progressBarContainer-increment" style={{width:`${scrollTop}%`}}></div>
        </div>
        <CarousalTop details={newsCarousalData}/>
        <NewsLinks  details={newsLinksDetails}/>
        <Recent detailsLeft={newsRecentDetailsLeft} detailsRight={newsRecentDetailsRight} />
        <Technology details={newsTechnologyDetails} />
        <TodayHighlights details={newsTodayHighlightsDetails}/>
        <ArtAndCulture details={newsArtAndCultureDetails} />
        <Selected detailsLeft={newsSelectedDetailsLeft} detailsRight={newsSelectedDetailsRight}/>
        <Travel details={newsTravelDetails}/>
        <div className="news-page-container-categories">
            <h3 className="news-page-container-categories-head1">Categories</h3>
            <h6  className="news-page-container-categories-head2">FEATURED POSTS</h6>
            <Categories details={newsCategoriesDetails}/>
        </div>
        <MoreFromHypeSlider details={newsMoreFromHypeSliderDetails} />
        <Video detailsLeft={newsVideoDetailsLeft} detailsRight={newsVideoDetailsRight} />
        <SelectedPosts details={newsSelectedPostsDetails} />
        <WhatsTrendingToday details={newsWhatsTrendingTodayDetails}/>
        <LastWholeSection details={newsLastWholeSectionDetails}/>
      </motion.div> 
    </>
  )
}

export default News
