import React from 'react';
import {
    Link
} from "react-router-dom";
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../author-date-readTime'
import './_technology.scss'

import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'
import CustomAnimation from '../../../customAnimation/index'

const hidden={
    opacity:0,
    x:-100,
}
const visible={
    opacity:1,
    x:0,
    transition:{
        ease:'easeIn',
        delay:.3,
    }
   }

const Technology = ({ details }) => {
    const headAnimation=MappedDataAnimation(.1);
    const customAnimation=CustomAnimation(hidden,visible,.1);

    return (
        <>
            <div className="newsTechnology-wrapper">
                <h3 className="newsTechnology-wrapper-head1">Technology</h3>
                <h6 className="newsTechnology-wrapper-head2">Top of The week News</h6>

                <div ref={headAnimation.ref}  className="newsTechnology-wrapper-cardsContainer">
                    {details.map((data,index) => (
                        <motion.div key={index} custom={index} animate={headAnimation.animation} className="newsTechnology-wrapper-cardsContainer-card">
                            <div className="newsTechnology-wrapper-cardsContainer-card-img" style={{ backgroundImage: `url(${data.bgImage})` }}>
                                <div className="newsTechnology-wrapper-cardsContainer-card-img-rating">
                                    {data.rating}
                                </div>

                            </div>

                            <div className="newsTechnology-wrapper-cardsContainer-card-tags">
                                {data.tag.map((data,index) => (
                                    <NewsLinkTag key={index} color={data.color} tag={data.tag} link={data.link} className="newsTechnology-wrapper-cardsContainer-card-tags-tag" />
                                ))}
                            </div>
                            <Link to="/newsDetails">
                                <h3 className="newsTechnology-wrapper-cardsContainer-card-head"><a href={data.headinglink}>{data.heading}</a></h3>
                            </Link>
                            <div className="newsTechnology-wrapper-cardsContainer-card-dateread">
                                <AuthorDateRead author={data.dateAndTime.author} link={data.dateAndTime.link} date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                            </div>
                            <p className="newsTechnology-wrapper-cardsContainer-card-para">{data.para}</p>
                        </motion.div>
                    ))}
                </div>
          
                <motion.button 
                ref={customAnimation.ref} 
                animate={customAnimation.animation} 
                whileHover={{
                   backgroundColor:'#48494b',
                    // transition: { duration: .25 },
                }}
                className="newsTechnology-wrapper-btn">Load more</motion.button>
            </div>
        </>
    )
}

export default Technology
