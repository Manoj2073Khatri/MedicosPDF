import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../author-date-readTime'
import './_selected.scss'
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'
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

const Selected = ({detailsLeft,detailsRight}) => {
    const headAnimation=MappedDataAnimation(.1);
    const customAnimation=CustomAnimation(hidden,visible,.1);
    return (
        <>
            <div className="newsSelected-wrapper">
                <h3 className="newsSelected-wrapper-head1">Selected</h3>
                <h6 className="newsSelected-wrapper-head2">BEST FOR YOU</h6>
                <div ref={customAnimation.ref} className="newsSelected-wrapper-imageContainer">
                    <motion.div animate={customAnimation.animation} className="newsSelected-wrapper-imageContainer-left">  
                        <div className="newsSelected-wrapper-imageContainer-left-img" style={{backgroundImage:`url(${detailsLeft.bgImg})`}}>
                            <div className="newsSelected-wrapper-imageContainer-left-img-rating">
                              {detailsLeft.rating}
                            </div>
                        </div>
                        <NewsLinkTag key={detailsLeft.tag.id} color={detailsLeft.tag.color} tag={detailsLeft.tag.tag} link={detailsLeft.tag.link} />
                        <h3 className="newsSelected-wrapper-imageContainer-left-heading"><a href={detailsLeft.headinglink}>{detailsLeft.heading}</a></h3>
                        <AuthorDateRead author={detailsLeft.dateAndTime.author} link={detailsLeft.dateAndTime.link} date={detailsLeft.dateAndTime.date} readTime={detailsLeft.dateAndTime.readTime} color={detailsLeft.dateAndTime.color} fontSize={detailsLeft.dateAndTime.fontSize} />
                    </motion.div>

                    <div ref={headAnimation.ref} className="newsSelected-wrapper-imageContainer-right">
                        {detailsRight.map(data=>(
                            <motion.div custom={data.id} animate={headAnimation.animation} key={data.id} className="newsSelected-wrapper-imageContainer-right-imgWrapper">
                                <div style={{backgroundImage:`url(${data.bgImg})`}} className="newsSelected-wrapper-imageContainer-right-imgWrapper-img">
                                    <div className="newsSelected-wrapper-imageContainer-right-imgWrapper-img-rating">{data.rating}</div>
                                </div>
                                <h3 className="newsSelected-wrapper-imageContainer-right-imgWrapper-head"><a href={data.headlink} >{data.head}</a></h3>
                           </motion.div>
                        ))}

                    </div>
                </div>
                
            </div>
            <hr className="selected-borderbottom"></hr>
            
            
        </>
    )
}

export default Selected
