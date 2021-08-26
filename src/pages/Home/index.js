import React from 'react';
import "./index.scss";
import Welcome from './components/welcome';
import Journal from './components/journal';
import Slide from './components/slide';
import Faculties from './components/faculties';
import WhatClientSays from '../../components/whatClientSays';
import { accordion, homeAwesomeProductDetails, whatClientSays } from '../../components/constants/mock';
import { Accordion } from '../../components/Accordion';
import OurProducts from './components/ourProducts';
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
const Home = () => {
    return (
        <motion.div 
        variants={variants}
        exit='exit'
        className="home-page-container">
            <Welcome />
            <Journal />
            <Slide />
            <Faculties />
            <OurProducts details={homeAwesomeProductDetails} />
            <WhatClientSays details={whatClientSays} />
            <Accordion accordion={accordion} />
        </motion.div>
    )
}

export default Home
