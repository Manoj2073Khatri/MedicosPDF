import React from 'react';
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import './_outPost.scss';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'

export const OutPost = ({outPost}) => {
    const headAnimation1=MappedDataAnimation(.1);
    return (
        <div className="outPost-wrapper">
        <h3 className="outPost-wrapper-heading">Out Post</h3>
        <div ref={headAnimation1.ref} className="outPost-wrapper-content">
        {
            outPost.map((data,index)=>{
                return  <motion.div custom={index} animate={headAnimation1.animation} className="outPost-wrapper-content-item" key={index}>
                    <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                        <h3 className="outPost-wrapper-content-item-heading">{data.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>


                    </motion.div>
                 
            })
        }
</div>
            
        </div>
    )
}
