import React from 'react';
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import './_politics.scss';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'
export const Politics = ({politics}) => {
    const headAnimation=MappedDataAnimation(.1);
    return (
        <div className="politics-wrapper">
        <h3 className="politics-wrapper-heading">Politics</h3>
        <div ref={headAnimation.ref} className="politics-wrapper-content">
        {
            politics.map((data,index)=>{
                return  <motion.div key={index} custom={index} animate={headAnimation.animation} className="politics-wrapper-content-item" >
                    <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                        <h3 className="politics-wrapper-content-item-heading">{data.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>


                    </motion.div>
                 
            })
        }
</div>
            
        </div>
    )
}
