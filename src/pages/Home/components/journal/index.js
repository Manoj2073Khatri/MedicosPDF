import React from 'react';
import ButtonWithArrow from '../buttonWithArrow';
import "./index.scss";
import { motion } from 'framer-motion';
import CustomAnimation from '../../../customAnimation'

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
const Journal = () => {
    const imgAnimation=CustomAnimation(hidden,visible,.1);
    const headAnimation=CustomAnimation(hidden,visible,.1);
    const paraAnimation=CustomAnimation(hidden,visible,.1);
    return (
        <div className="home-page-journal-wrapper">
            <div ref={imgAnimation.ref}>
              <motion.img  animate={imgAnimation.animation}  className="illustration" src={require("../../../../assets/images/home/journal.png").default} />
            </div>   
            <div ref={headAnimation.ref} className="home-page-journal-wrapper-content">
                <motion.h3
                 animate={headAnimation.animation}
                  >
                    7,000+ Journals
                </motion.h3>
            <div ref={paraAnimation.ref} className="paragraph">
                <motion.p
                 animate={paraAnimation.animation}
                 >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ante magna pulvinar sem molestie aliquam non. Tincidunt viverra orci egestas sed. Viverra facilisis nunc, adipiscing amet, et, sem etiam. Malesuada lectus dolor pharetra, pulvinar varius. Natoque risus, urna, nibh orci, dictum scelerisque purus. Facilisis lacus, tempor pharetra elementum, turpis nec elit in. Odio purus gravida eu aliquam. Aliquam ut dui dictumst pellentesque ac tempus consectetur. At at felis facilisis tristique elementum aliquam lectus.
                </motion.p>
            </div>
           
             <ButtonWithArrow name="Explore Journals" link="/Explore Journals"/> 
            </div>
        </div>
    )
}

export default Journal
