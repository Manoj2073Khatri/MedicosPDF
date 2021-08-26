import React from 'react';
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import './_markets.scss';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'
export const Markets = ({markets}) => {
    const headAnimation=MappedDataAnimation(.1);
    return (
        <div className="markets-wrapper">
        <h3 className="markets-wrapper-heading">Markets</h3>
        <div ref={headAnimation.ref} className="markets-wrapper-content">
        {
            markets.map((data,index)=>{
                return  <motion.div custom={index} animate={headAnimation.animation} className="markets-wrapper-content-item" key={index}>
                    <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                        <h3 className="markets-wrapper-content-item-heading">{data.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>


                    </motion.div>
                 
            })
        }
</div>
            
        </div>
    )
}
