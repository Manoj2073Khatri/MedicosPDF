import React from 'react'
import { europeanNews, income, InHype, lastsecCol1, lastseccol1row1, mainTopCol1, mainTopCol2, mainTopCol3, markets, politics, quickTake, selected, stories, topSlider, trending, weekends, weekendscol2, worldwideDetails, worldwideleft, worldwideright } from '../../components/constants/mock';
import { MainTop } from './Component/articleMainTop'
import European_News from './Component/EuropeanNews';
import { InHypeBusiness } from './Component/InHypeBusiness';
import { LastSection } from './Component/LastSection';
import { Markets } from './Component/markets';
import { Politics } from './Component/politics';
import { Selected } from './Component/Selected';
import { StoriesForYou } from './Component/StoriesForYou';
import TopSlider from './Component/topSlider';
import Trending from './Component/trending';
import { Weekend } from './Component/weekend';
import WorldWideNews from './Component/WorldWideNews';
import { Income } from './Income/income';
import QuickTake from './QuickTake';
import './_article.scss';
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
 const Article = () => {
    return (
        <motion.div
        variants={variants}
        exit='exit'
        className="article-wrapper">
                <MainTop mainTopCol1={mainTopCol1} mainTopCol2={mainTopCol2} mainTopCol3={mainTopCol3}/>
                <TopSlider details={topSlider}/>
                <Weekend weekend={weekends}/>
                <StoriesForYou stories={stories}/>
                <InHypeBusiness InHype={InHype}/>
                <Politics politics={politics}/>
                <European_News details={europeanNews}/>
                <Selected selected={selected}/>
                <QuickTake details={quickTake}/>
                <WorldWideNews details={worldwideDetails}/>
                <Markets markets={markets}/>
                <LastSection lastsecCol1={lastsecCol1} lastsecCol1Row2={lastseccol1row1}/>
                <Trending details={trending}/>
                <Income income={income}/>
        
        
            
        </motion.div>
    )
}
export default Article
