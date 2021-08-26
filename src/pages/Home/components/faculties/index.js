import React from 'react';
import { DisplayTitle } from '../../../../components/global/Titles';
import "./index.scss";
import ButtonWithArrow from '../buttonWithArrow';
import { motion } from 'framer-motion';
import CustomAnimation from '../../../customAnimation/index';
import Animation from '../../../customAnimation/mappedDataAnimation';
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
const Faculties = () => {

    const headAnimation=CustomAnimation(hidden,visible,.1);
    const paraAnimation=CustomAnimation(hidden,visible,.1);
    const animation=Animation(.1);
    return (
        <div className="home-page-faculties-wrapper">
            <div className="faculties-image-container">
                <div ref={animation.ref} className="faculties-image-container-row1">

                    <div className={`image-card-wrapper`}>
                        <div className="image-card-wrapper-container">
                            <motion.div custom={0}  animate={animation.animation} className="image-card-wrapper-container-image" style={{ backgroundImage: `url(${require("../../../../assets/images/home/mbbs.png").default})` }}>
                            </motion.div>
                            <motion.div ref={headAnimation.ref} animate={headAnimation.animation} className="image-card-wrapper-container-text">
                                <DisplayTitle color="white" type="display4" title="MBBS" />
                            </motion.div>
                        </div>
                    </div>
                    <div className={`image-card-wrapper`}>
                        <div  className="image-card-wrapper-container">
                            <motion.div  custom={1}  animate={animation.animation} className="image-card-wrapper-container-image" style={{ backgroundImage: `url(${require("../../../../assets/images/home/bds.png").default})` }}>
                            </motion.div>
                            <motion.div ref={headAnimation.ref} animate={headAnimation.animation}className="image-card-wrapper-container-text">
                                <DisplayTitle color="white" type="display4" title="BDS" />
                            </motion.div>
                        </div>
                    </div>

                    <div className={`large-image-card-wrapper`}>
                        <div className="image-card-wrapper-container">
                            <motion.div  custom={2}  animate={animation.animation}  className="image-card-wrapper-container-image" style={{ backgroundImage: `url(${require("../../../../assets/images/home/surgery.png").default})` }}>
                            </motion.div>
                            <motion.div ref={headAnimation.ref} animate={headAnimation.animation} className="image-card-wrapper-container-text">
                                <DisplayTitle color="white" type="display4" title="Surgery" />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="faculties-image-container-row2">
                    <div className={`large-image-card-wrapper`}>
                        <div className="image-card-wrapper-container">
                            <motion.div  custom={3}  animate={animation.animation} className="image-card-wrapper-container-image" style={{ backgroundImage: `url(${require("../../../../assets/images/home/therapy.png").default})` }}>
                            </motion.div>
                            <motion.div ref={headAnimation.ref} animate={headAnimation.animation} className="image-card-wrapper-container-text">
                                <DisplayTitle color="white" type="display4" title="Physiotherapy" />
                            </motion.div>
                        </div>
                    </div>


                    <div className={`image-card-wrapper`}>
                        <div className="image-card-wrapper-container">
                            <motion.div  custom={4}  animate={animation.animation}  className="image-card-wrapper-container-image" style={{ backgroundImage: `url(${require("../../../../assets/images/home/nursing.png").default})` }}>
                            </motion.div>

                            <motion.div ref={headAnimation.ref} animate={headAnimation.animation} className="image-card-wrapper-container-text">
                                <DisplayTitle color="white" type="display4" title="Nursing" />
                            </motion.div>
                        </div>
                    </div>

                    <div className={`image-card-wrapper`}>
                        <div  className="image-card-wrapper-container">
                            <motion.div  custom={5}  animate={animation.animation}  className="image-card-wrapper-container-image" style={{ backgroundImage: `url(${require("../../../../assets/images/home/bams.png").default})` }}>
                            </motion.div>
                            <motion.div ref={headAnimation.ref} animate={headAnimation.animation} className="image-card-wrapper-container-text">
                                <DisplayTitle color="white" type="display4" title="BAMS" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-page-faculties-wrapper-content">
                <motion.h3 ref={headAnimation.ref} animate={headAnimation.animation}>Faculties</motion.h3>
                <div ref={paraAnimation.ref} className="paragraph">
                    <motion.p animate={paraAnimation.animation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ante magna pulvinar sem molestie aliquam non. Tincidunt viverra orci egestas sed. Viverra facilisis nunc, adipiscing amet, et, sem etiam. Malesuada lectus dolor pharetra, pulvinar varius. Natoque risus, urna, nibh orci, dictum scelerisque purus. Facilisis lacus, tempor pharetra elementum, turpis nec elit in. Odio purus gravida eu aliquam. Aliquam ut dui dictumst pellentesque ac tempus consectetur. At at felis facilisis tristique elementum aliquam lectus.</motion.p>
                </div>
               <ButtonWithArrow name="Explore Faculties" link='/exploreFaculties' />
            </div>
        </div>
    )
}

export default Faculties
