import React from 'react';
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import AuthorDateRead from '../../../News/components/author-date-readTime';
import './_latestJournal.scss';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'

export const LatestJournal = ({latestJournal}) => {
    const headAnimation1=MappedDataAnimation(.1);
    return (
        <div className="latestJournal-wrapper">
        <h3 className="latestJournal-wrapper-heading">Latest Journals</h3>
        <div ref={headAnimation1.ref} className="latestJournal-wrapper-content">
        {
            latestJournal.map((data,index)=>{
                return  <motion.div custom={index} animate={headAnimation1.animation} className="latestJournal-wrapper-content-item" key={index}>
                    <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                        <h3 className="latestJournal-wrapper-content-item-heading">{data.heading}</h3>
                        <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>


                    </motion.div>
                 
            })
        }
</div>
            
        </div>
    )
}
