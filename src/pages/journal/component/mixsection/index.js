import React from 'react'
import { latestJournal,journalCategoriesDetails } from '../../../../components/constants/mock'
import NewsLinkTag from '../../../../components/global/newsLinkTag';
import { SocialFollow } from '../../../Article/Component/SocialFollow';
import AuthorDateRead from '../../../News/components/author-date-readTime';
//import { LatestPost } from '../../../Article/Component/latestPost'
import JournalCategories from '../catagories'
import { LatestJournal } from '../latestJournal'
import './_mixsection.scss';
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'

export const MixSection = ({mostVisited}) => {
    const headAnimation1=MappedDataAnimation(.1);
    return (
        <div className="mixsection-wrapper">
            <div className="mixsection-wrapper-content">
            <div className="mixsection-wrapper-content-col1">
                <h3 className="mixsection-wrapper-content-col1-heading">Most Visited</h3>
                <div ref={headAnimation1.ref} className="mixsection-wrapper-content-col1-item">
                {
                mostVisited.map((data,index)=>{
                    return  <motion.div custom={index} animate={headAnimation1.animation} className="mixsection-wrapper-content-col1-item-content" key={index}>
                        <NewsLinkTag color={data.tagColor} tag={data.tagName} link={'/#456'} />
                            <h3 className="mixsection-wrapper-content-col1-item-content-heading">{data.heading}</h3>
                            <AuthorDateRead  date='September 19,2019' readTime='4 Min read' color='#9f9f9f' fontSize='12px'/>


                        </motion.div>
                    
                })
            }
        </div>
                
            </div>
            <div className="mixsection-wrapper-content-col2">
            <LatestJournal latestJournal={latestJournal}/>
            <JournalCategories details={journalCategoriesDetails}/>
            <SocialFollow/>
                
            </div>

            </div>
            
        </div>
    )
}
