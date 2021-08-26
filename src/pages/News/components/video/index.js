import React from 'react'
import { newsRecentDetailsRight } from '../../../../components/constants/mock'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../author-date-readTime'
import './_video.scss'
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


const Video = ({detailsLeft,detailsRight}) => {
    const headAnimation=MappedDataAnimation(.1);
    const customAnimation=CustomAnimation(hidden,visible,.1);
    return (
        <>

         <div className="newsVideo-wrapper">

             <h3 className="newsVideo-wrapper-head1">Video</h3>
             <h6 className="newsVideo-wrapper-head2">SELECTED VIDEO POSTS</h6>
             <div ref={customAnimation.ref} className="newsVideo-wrapper-imgContainer">
                 <motion.div animate={customAnimation.animation} className="newsVideo-wrapper-imgContainer-left">
                     <div className="newsVideo-wrapper-imgContainer-left-img" style={{backgroundImage:`url(${detailsLeft.bgImg})`}}>
                        <div className="newsVideo-wrapper-imgContainer-left-img-description">
                            <NewsLinkTag color={detailsLeft.tag.color} tag={detailsLeft.tag.tag} link={detailsLeft.tag.link} />
                            <h3 className="newsVideo-wrapper-imgContainer-left-img-description-head"><a href={detailsLeft.headinglink}>{detailsLeft.heading}</a></h3>
                            <AuthorDateRead  date={detailsLeft.dateAndTime.date} readTime={detailsLeft.dateAndTime.readTime} color={detailsLeft.dateAndTime.color} fontSize={detailsLeft.dateAndTime.fontSize}  />
                         </div>
                     </div>

                 </motion.div>

                 <div ref={headAnimation.ref} className="newsVideo-wrapper-imgContainer-right">
                     {detailsRight.map((data,index)=>(
                        <motion.div key={index} custom={index} animate={headAnimation.animation} className="newsVideo-wrapper-imgContainer-right-img" style={{backgroundImage:`url(${data.bgImg})`}}>
                            <div className="newsVideo-wrapper-imgContainer-right-img-description">
                                <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                <h3 className="newsVideo-wrapper-imgContainer-right-img-description-head"><a href={data.hedinglink}>{data.heading}</a></h3>
                                <AuthorDateRead  date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}  />
                            </div>

                            <div className="newsVideo-wrapper-imgContainer-right-img-play">
                               {data.playbtn}
                            </div>

                        </motion.div>
                     ))}
                    

                 </div>
             </div>
         </div>

            
        </>
    )
}

export default Video
