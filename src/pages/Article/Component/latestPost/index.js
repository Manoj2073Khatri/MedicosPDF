import React from 'react';
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import './_latest.scss';
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

export const LatestPost = ({latestPost}) => {
    const customAnimation=CustomAnimation(hidden,visible,.1);
    return (
        <motion.div ref={customAnimation.ref} animate={customAnimation.animation}  className="latestPost-wrapper">
        <h3 className="latestPost-wrapper-heading">Latest Posts</h3>
        <div className="latestPost-wrapper-content">
        {
            latestPost.map((data,index)=>{
                return  <div className="latestPost-wrapper-content-item" key={index}>
                    <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                        <h3 className="latestPost-wrapper-content-item-heading">{data.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>


                    </div>
                 
            })
        }
</div>
            
        </motion.div>
    )
}
