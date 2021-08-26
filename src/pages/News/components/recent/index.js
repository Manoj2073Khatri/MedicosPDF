import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import './_recent.scss'
import AuthorDateRead from '../author-date-readTime'
import { motion } from 'framer-motion';
import MappedDataAnimation from '../../../customAnimation/mappedDataAnimation'

const Recent = ({detailsLeft,detailsRight}) => {
    const headAnimation=MappedDataAnimation(.1);
    return (
        <>
        <div className="newsRecent-wrapper">
            <div className="newsRecent-wrapper-left"  style={{backgroundImage:`url(${detailsLeft.bgImage})`}}>

                <div className="newsRecent-wrapper-left-mid">
                    <NewsLinkTag color={detailsLeft.tag.color} tag={detailsLeft.tag.tag} link={detailsLeft.tag.link} />
                    <h3 className="newsRecent-wrapper-left-mid-head"><a href={detailsLeft.leftheadinglink}>{detailsLeft.leftheading}</a></h3>
                    <AuthorDateRead date={detailsLeft.dateAndTime.date} readTime={detailsLeft.dateAndTime.readTime} color={detailsLeft.dateAndTime.color} fontSize={detailsLeft.dateAndTime.fontSize}/>
                    <h3 className="newsRecent-wrapper-left-mid-para">{detailsLeft.leftpara}</h3>
                </div>

            </div>

            <div  className="newsRecent-wrapper-right">
                <h1 className="newsRecent-wrapper-right-head">Recent</h1>
                <div  ref={headAnimation.ref} className="newsRecent-wrapper-right-description">
                    {detailsRight.map((data,index)=>(
                    <motion.div key={index} custom={index} animate={headAnimation.animation} className="newsRecent-wrapper-right-description-wrapper">
                        <h3 className="newsRecent-wrapper-right-description-wrapper-head"><a href={data.link}>{data.righthead}</a></h3>
                        <AuthorDateRead  author={data.dateAndTime.author} authorColor={data.dateAndTime.authorColor} link={data.dateAndTime.link} date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}  />
                    </motion.div>
                    ))}
                   

                </div>

           </div>

        </div>
           
        </>
    )
}

export default Recent
