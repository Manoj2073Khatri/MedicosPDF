import React from 'react';
import "./index.scss";
import Search from '../../../../components/global/search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';
const headerVariants={
    hidden:{
        opacity:0,
        scale:0,
    },
    visible:{
        opacity:1,
       scale:1,
        transition:{
            ease:'easeIn',
            type:'spring',
            delay:.5,
        }
       },
    }

const paraVariants={
        hidden:{
            opacity:0,
            y:100,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                ease:'easeIn',
                type:'spring',
                delay:.5,
            }
           },
        }
      
const Welcome = () => {
    return (
        <div className="home-page-welcome-wrapper">
            <div className="home-page-welcome-wrapper-content">
                <div className="home-page-welcome-wrapper-content-head">
                  <motion.h2
                  variants={headerVariants}
                  initial='hidden'
                  animate='visible'
                //   exit='exit'
                  >
                      Welcome to Our Medicos Family
                  </motion.h2>
                </div>
               
                <div className="paragraph">
                    <motion.p
                     variants={paraVariants}
                     initial='hidden'
                     animate='visible'
                    //  exit='exit'
                    >Join our community of over one million medical students and doctors from all around the world, where you can share,connect, work and learn with our energetic team. </motion.p>
                </div>    
                  <Search />
        
            </div>
            
            <img className="background-image" src={require("../../../../assets/images/home/headerBg.png").default}/>

            <div className="home-page-welcome-wrapper-downArrow">
                <FontAwesomeIcon icon={faLongArrowAltDown} className="home-page-welcome-wrapper-downArrow-icon"/>
            </div>
        </div>
    )
}

export default Welcome
