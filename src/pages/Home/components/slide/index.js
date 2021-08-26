import React from 'react';
import { RiSlideshow2Fill } from "react-icons/ri";
import { IoPlayCircleOutline } from "react-icons/io5";
import "./index.scss";
import ButtonWithArrow from '../buttonWithArrow';
import { motion } from 'framer-motion';
import CustomAnimation from '../../../customAnimation';

const hidden={
    opacity:0,
    y:100,
}
const visible={
    opacity:1,
    y:0,
    transition:{
        ease:'easeIn',
        delay:.5,

    }
   }
const Slide = () => {
    const imgAnimation=CustomAnimation(hidden,visible,.1);
    const headAnimation=CustomAnimation(hidden,visible,.1);
    const paraAnimation=CustomAnimation(hidden,visible,.1);
    return (
        <div className="home-page-slide-wrapper">
            <div ref={headAnimation.ref} className="home-page-slide-wrapper-content">
                <motion.div animate={headAnimation.animation} className="title">
                    <RiSlideshow2Fill className="icon" />
                    <h3>Slides</h3>
                </motion.div>
                <div ref={paraAnimation.ref} className="paragraph">
                    <motion.p
                    animate={paraAnimation.animation}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ante magna pulvinar sem molestie aliquam non. Tincidunt viverra orci egestas sed. Viverra facilisis nunc, adipiscing amet, et, sem etiam. Malesuada lectus dolor pharetra, pulvinar varius. Natoque risus, urna, nibh orci, dictum scelerisque purus. Facilisis lacus, tempor pharetra elementum, turpis nec elit in. Odio purus gravida eu aliquam. Aliquam ut dui dictumst pellentesque ac tempus consectetur. At at felis facilisis tristique elementum aliquam lectus.</motion.p>
                </div>
                <ButtonWithArrow name='Explore Slides' link='/exploreSlides' />
            </div> 
            <motion.div ref={imgAnimation.ref} animate={imgAnimation.animation} className="stacked-slide-image">
                <IoPlayCircleOutline className="icon" />
                <img className="image1" src={require("../../../../assets/images/home/slide1.png").default} />
                <img className="image2" src={require("../../../../assets/images/home/slide2.png").default} />
                <img className="image3" src={require("../../../../assets/images/home/slide3.png").default} />
                <img className="image4" src={require("../../../../assets/images/home/slide4.png").default} />
    
            </motion.div>
        </div>
    )
}

export default Slide
