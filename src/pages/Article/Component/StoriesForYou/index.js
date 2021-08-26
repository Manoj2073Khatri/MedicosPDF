import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import './_storiesForYou.scss';
import { motion } from 'framer-motion';

import CustomAnimation from '../../../customAnimation/index'

const hidden={
    opacity:0,
    y:100,
}
const visible={
    opacity:1,
    y:0,
    transition:{
        delay:.3,
        ease:'easeIn'
    }
   }

export const StoriesForYou = ({stories}) => {
    const customAnimation=CustomAnimation(hidden,visible,.1);
    return (
        <div className="storiesForYou-wrapper">
        <h3> Stories For You</h3>
            <motion.div ref={customAnimation.ref} animate={customAnimation.animation} className="storiesForYou">
                {
                    stories.map((data,index)=>{
                        return <div key={index} className="storiesForYou-content">
                    <div className="storiesForYou-content-image"  style={{backgroundImage:`url(${data.background})`}}>
                    </div>
                    <div className="storiesForYou-content-bottom">
                    <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                        <h3 className="storiesForYou-content-bottom-heading">{data.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>


                    </div>

                </div>
                    })
                }
                

            </motion.div>
            
        </div>
    )
}
