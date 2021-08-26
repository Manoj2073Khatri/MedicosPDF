import React from 'react'
import AuthorDateRead from '../../../News/components/author-date-readTime'
import './_recent.scss';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'

export const JournlRecent = ({recent}) => {
    const headAnimation1=MappedDataAnimation(.1);
    return (
        <div>
            <div className="journalRecent-wrapper">
                <h1 className="journalRecent-wrapper-head">Recent Journals</h1>
                <div ref={headAnimation1.ref} className="journalRecent-wrapper-description">
                    {recent.map((data,index)=>(
                    <motion.div key={index} custom={index} animate={headAnimation1.animation} className="journalRecent-wrapper-description-wrapper">
                        <h3 className="journalRecent-wrapper-description-wrapper-head"><a href={data.link}>{data.heading}</a></h3>
                        <AuthorDateRead  author={data.dateAndTime.author} authorColor={data.dateAndTime.authorColor} link={data.dateAndTime.link} date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}  />
                    </motion.div>
                    ))}
                   

                </div>

           </div>
            
        </div>
    )
}
