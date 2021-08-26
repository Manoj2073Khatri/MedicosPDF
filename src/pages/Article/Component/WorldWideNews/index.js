import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../../../News/components/author-date-readTime'

import './_worldwide.scss'
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'

const WorldWideNews = ({details}) => {
    const headAnimation=MappedDataAnimation(.1);
    return (
        <>
            <div className="worldwide-wrapper">
                <h3 className="worldwide-wrapper-head1"> WorldWide News</h3>
                <h6 className="worldwide-wrapper-head2">BEST FOR YOU</h6>
                <div ref={headAnimation.ref} className="worldwide-wrapper-imagesContainer">
                    {details.map(data=>(
                        <motion.div custom={data.id} animate={headAnimation.animation} key={data.id} className="worldwide-wrapper-imagesContainer-bgImg" style={{backgroundImage:`url(${data.bgImg})`}}>
                           <div className="worldwide-wrapper-imagesContainer-bgImg-description">
                                <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                <h3 className="worldwide-wrapper-imagesContainer-bgImg-description-heading"><a href={data.headlink}>{data.head}</a></h3>
                                <AuthorDateRead  date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}  />
                           </div>
                        </motion.div>
                    ))}
                </div>
                
            </div>

     
            
        </>
    )
}

export default WorldWideNews
