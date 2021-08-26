import React,{useState,useEffect} from 'react';
import { journalRecent, journalSelected, journalSlider, latestJournal, mostVisit, outPost } from '../../components/constants/mock'
import AuthorDateRead from '../News/components/author-date-readTime'
import JournalSlider from './component/journalSlider'
import { LatestJournal } from './component/latestJournal'
import { MixSection } from './component/mixsection'
import { OutPost } from './component/outpost'
import { JournlRecent } from './component/recent'
import SelectedJournal from './component/selectedJournal'
import './_journal.scss';
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
export const Journal = ({}) => {
    
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
        <motion.div 
        variants={variants}
        exit='exit'
        className="journal-wrapper">
            <div className="progressBarContainer">
            <div className="progressBarContainer-increment" style={{width:`${scrollTop}%`}}></div>
            </div>

            <SelectedJournal details={journalSelected}/>
            <JournlRecent recent={journalRecent}/>
            <OutPost outPost={outPost}/>
            <JournalSlider details={journalSlider}/>
            <MixSection mostVisited={mostVisit}/>
        
         
        </motion.div>
    )
}
