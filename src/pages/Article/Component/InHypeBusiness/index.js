import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../../../News/components/author-date-readTime'
import bgImage1 from '../../../../assets/images/popup.jpg';
import './_inHypeBusiness.scss'
import { Button } from '../../../../components/global/button';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'
import CustomAnimation from '../../../customAnimation/index'

const hidden={
    opacity:0,
    x:100,
}
const visible={
    opacity:1,
    x:0,
    transition:{
        ease:'easeIn',
        delay:.3,
    }
   }
export const InHypeBusiness = ({InHype}) => {
    const headAnimation=MappedDataAnimation(.1);
    const customAnimation=CustomAnimation(hidden,visible,.1);
    return (
        <div className="inHypeBusiness-wrapper">
            <h3>InHype Business</h3>
            <div ref={headAnimation.ref} className="inHypeBusiness">
            {
                InHype.map((data,index)=>
                {
                    return  <motion.div key={index} custom={index} animate={headAnimation.animation} className="inHypeBusiness-content">
                    <div className="inHypeBusiness-content-image"  style={{backgroundImage:`url(${data.background})`}}>
                    </div>
                    <div className="inHypeBusiness-content-bottom">
                    <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                        <h3 className="inHypeBusiness-content-bottom-heading">{data.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>
                    </div>

                </motion.div>
                })
            }
            
            </div>
            <motion.div animate={customAnimation.animation} className="inHypeBusiness-wrapper-button">
                            <Button type="primary" label="Read More"/>
            </motion.div>
            
        </div>
    )
}
