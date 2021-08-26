import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../author-date-readTime'
import './_travel.scss'
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'
const Travel = ({details}) => {
    const headAnimation=MappedDataAnimation(.1);
    return (
        <>
            <div className="newsTravel-wrapper">
                <h3 className="newsTravel-wrapper-head1">Travel</h3>
                <h6 className="newsTravel-wrapper-head2">Where are we going</h6>
                <div ref={headAnimation.ref} className="newsTravel-wrapper-imagesContainer">
                    {details.map(data=>(
                        <motion.div custom={data.id} animate={headAnimation.animation} key={data.id} className="newsTravel-wrapper-imagesContainer-bgImg" style={{backgroundImage:`url(${data.bgImg})`}}>
                           <div className="newsTravel-wrapper-imagesContainer-bgImg-description">
                                <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                <h3 className="newsTravel-wrapper-imagesContainer-bgImg-description-heading"><a href={data.headlink}>{data.head}</a></h3>
                                <AuthorDateRead  date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}  />
                           </div>
                        </motion.div>
                    ))}
                </div>
                
            </div>

     
            
        </>
    )
}

export default Travel
