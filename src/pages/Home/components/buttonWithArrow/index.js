import React from 'react'
import './_buttonWithArrow.scss'
import {HiArrowNarrowRight} from "react-icons/hi";
import { motion } from 'framer-motion';
import CustomAnimation from '../../../customAnimation';

const hidden={
    opacity:0,
    x:-100,
}
const visible={
    opacity:1,
    x:0,
    transition:{
        ease:'easeIn',
        delay:.5,
    }
   }
const ButtonWithArrow = ({name,link}) => {
    const btnAnimation=CustomAnimation(hidden,visible,.1);
    return (
        <motion.div ref={btnAnimation.ref} animate={btnAnimation.animation} className="homeButtonWithArrow-container">
            <button className="homeButtonWithArrow-container-btn">
                <a href={link}>{name}</a>
                < HiArrowNarrowRight size={20} className="homeButtonWithArrow-container-btn-icon"/>  
            </button>
        </motion.div>
    )
}

export default ButtonWithArrow
