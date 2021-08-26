import React,{useState,useEffect} from 'react';
import {newsDetailNavigationLinksDetails,newsDetailAboutAuthorDetails,newsDetailRelatedPostsDetails,newsDetailFutureFocusedDetails, newsDetailsTopBackground} from '../../components/constants/mock';

import TopBackground from './components/topBackground';
import NewsDetailRelatedPosts from '../NewsDetail/components/newsDetailsRelatedPosts/index'
import LeaveAReply from '../NewsDetail/components/leaveAReply/index'
import "./index.scss";
import NewsDetailBottomFullContainer from './components/newsDetailBottomFullContainer';
import AboutAuthor from './components/aboutAuthor';
import NavigationLinks from './components/navigationLinks';
import { PostPopUp } from '../../components/postPopUp';


const NewsDetail = () => {


  const [scrollTop,setScrollTop]=useState(0);
  const onScroll=()=>{
    const winScroll=document.documentElement.scrollTop;
    // console.log(winScroll);
    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    // console.log(height);
    const scrolled=(winScroll / height)*100;
    setScrollTop(scrolled);
  }

    useEffect(() => {

    window.addEventListener("scroll",onScroll);
    return()=>window.removeEventListener("scroll",onScroll);
      
    }, [])
  return (
    <div className="news-detail-page-container">
       <div className="progressBarContainer">
          <div className="progressBarContainer-increment" style={{width:`${scrollTop}%`}}></div>
        </div>
       <TopBackground details={newsDetailsTopBackground}/>
       <NewsDetailBottomFullContainer details={newsDetailFutureFocusedDetails}/>

       <div className="news-detail-page-container-aboutAuthor">
          <AboutAuthor details={newsDetailAboutAuthorDetails} />
       </div>
      
      <div className="news-detail-page-container-navigationLinks">
          <NavigationLinks details={newsDetailNavigationLinksDetails}/>
      </div>
       
       <div className="news-detail-page-container-relatedPosts">
          <NewsDetailRelatedPosts details={newsDetailRelatedPostsDetails} />
       </div>
    
      <div className="news-detail-page-container-leaveAReply">
        <LeaveAReply />
      </div>

      <PostPopUp />
      
    </div> 
  )
}

export default NewsDetail
