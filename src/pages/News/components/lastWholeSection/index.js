import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../author-date-readTime'
import './_lastWholeSection.scss'
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
const hidden1={
    opacity:0,
    x:100,
}
const visible1={
    opacity:1,
    y:0,
    transition:{
        delay:.3,
        ease:'easeIn'
    }
   }   
const LastWholeSection = ({ details }) => {
    const headAnimation1=MappedDataAnimation(.1);
    const headAnimation2=MappedDataAnimation(.1);
    const headAnimation3=MappedDataAnimation(.1);
    const headAnimation4=MappedDataAnimation(.1);
    const customAnimation1=CustomAnimation(hidden,visible,.1);
    const customAnimation2=CustomAnimation(hidden,visible,.1);
    const customAnimation3=CustomAnimation(hidden1,visible1,.1);

    return (
        <>

            <div className="newsLastWholeSection-container">

                <div  className="newsLastWholeSection-container-left">
                    <motion.div ref={customAnimation1.ref} animate={customAnimation1.animation} className="newsLastWholeSection-container-left-topImg" style={{ backgroundImage: `url(${details.col1topbgImage})` }}>
                        <div className="newsLastWholeSection-container-left-topImg-description">
                            <NewsLinkTag color={details.col1toptag.color} tag={details.col1toptag.tag} link={details.col1toptag.link} />
                            <h3 className="newsLastWholeSection-container-left-topImg-description-head"><a href={details.col1topheadinglink}>{details.col1topheading}</a></h3>
                            <AuthorDateRead author={details.col1topdateAndTime.author} authorColor={details.col1topdateAndTime.authorColor} link={details.col1topdateAndTime.link} date={details.col1topdateAndTime.date} readTime={details.col1topdateAndTime.readTime} color={details.col1topdateAndTime.color} fontSize={details.col1topdateAndTime.fontSize} />
                        </div>
                    </motion.div>

                    <div ref={headAnimation1.ref} className="newsLastWholeSection-container-left-bottomContainer">
                        {details.col1bottom.map((data,index) => (
                            <motion.div custom={data.id} animate={headAnimation1.animation} key={index} className="newsLastWholeSection-container-left-bottomContainer-singleCard">
                                <div className="newsLastWholeSection-container-left-bottomContainer-singleCard-img" style={{ backgroundImage: `url(${data.bgImage})` }}>
                                    <div className="newsLastWholeSection-container-left-bottomContainer-singleCard-img-tags">
                                        {data.rating}
                                        {data.playbtn}
                                    </div>
                                </div>
                                <div className="newsLastWholeSection-container-left-bottomContainer-singleCard-description">
                                    <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                    <h3 className="newsLastWholeSection-container-left-bottomContainer-singleCard-description-head" ><a href={data.headinglink}>{data.heading}</a></h3>
                                    <AuthorDateRead author={data.dateAndTime.author} authorColor={data.dateAndTime.authorColor} link={data.dateAndTime.link} date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                                </div>
                                <p className="newsLastWholeSection-container-left-bottomContainer-singleCard-para">{data.para}</p>
                            </motion.div>

                        ))}

                    </div>

                    <motion.button 
                    ref={customAnimation3.ref} 
                    animate={customAnimation3.animation}
                    className="newsLastWholeSection-container-left-btn">Load More</motion.button>
                </div>

                <div className="newsLastWholeSection-container-right">

                    <div className="newsLastWholeSection-container-right-latestPostsContainer">
                        <h3 className="newsLastWholeSection-container-right-latestPostsContainer-head">Latest posts</h3>
                        <div ref={headAnimation2.ref} className="newsLastWholeSection-container-right-latestPostsContainer-cardsContainer">
                            {details.col2latestPosts.map((data,index) => (
                                <motion.div key={index} custom={index} animate={headAnimation2.animation} className="newsLastWholeSection-container-right-latestPostsContainer-cardsContainer-card">
                                    <div className="newsLastWholeSection-container-right-latestPostsContainer-cardsContainer-card-img" style={{ backgroundImage: `url(${data.bgImage})` }}>
                                        <div className="newsLastWholeSection-container-right-latestPostsContainer-cardsContainer-card-img-playbtn">{data.playbtn}</div>
                                    </div>
                                    <div className="newsLastWholeSection-container-right-latestPostsContainer-cardsContainer-card-description">
                                        <NewsLinkTag color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                                        <h3 className="newsLastWholeSection-container-right-latestPostsContainer-cardsContainer-card-description-head" ><a href={data.headinglink}>{data.heading}</a></h3>
                                        <AuthorDateRead author={data.dateAndTime.author} authorColor={data.dateAndTime.authorColor} link={data.dateAndTime.link} date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                                    </div>
                                </motion.div>

                            ))}
                        </div>
                    </div>

                    <motion.div ref={customAnimation2.ref} animate={customAnimation2.animation} className="newsLastWholeSection-container-right-individualDetailsContainer">
                        <div className="newsLastWholeSection-container-right-individualDetailsContainer-description">
                            <h6 className="newsLastWholeSection-container-right-individualDetailsContainer-description-head">Hello, I'm {details.col2individualIntro.name}
                                <div className="newsLastWholeSection-container-right-individualDetailsContainer-description-head-img" style={{ backgroundImage: `url(${details.col2individualIntro.bgImage})` }}>
                                </div>
                            </h6>
                            <p className="newsLastWholeSection-container-right-individualDetailsContainer-description-para"> {details.col2individualIntro.para}</p>
                            <button className="newsLastWholeSection-container-right-individualDetailsContainer-description-btn"><a href={details.col2individualIntro.aboutmelink}>About me</a></button>
                        </div>


                    </motion.div>

                    <div className="newsLastWholeSection-container-right-popularContainer">
                        <h3 className="newsLastWholeSection-container-right-popularContainer-head">Popular</h3>
                        <div ref={headAnimation3.ref}className="newsLastWholeSection-container-right-popularContainer-cardsContainer">
                            {details.col2popular.map((data,index) => (
                                <motion.div custom={index} animate={headAnimation3.animation} className="newsLastWholeSection-container-right-popularContainer-cardsContainer-card" key={index}>
                                    <div className="newsLastWholeSection-container-right-popularContainer-cardsContainer-card-img" style={{ backgroundImage: `url(${data.bgImage})` }}></div>
                                    <div className="newsLastWholeSection-container-right-popularContainer-cardsContainer-card-description">
                                        <h3 className="newsLastWholeSection-container-right-popularContainer-cardsContainer-card-description-head"><a href={data.headinglink}>{data.heading}</a></h3>
                                        <AuthorDateRead date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="newsLastWholeSection-container-right-subscribeAndFollowContainer">
                        <h3 className="newsLastWholeSection-container-right-subscribeAndFollowContainer-head">Subscribe and Follow</h3>
                        <div ref={headAnimation4.ref} className="newsLastWholeSection-container-right-subscribeAndFollowContainer-cardsContainer">
                            {details.col2subscribeAndfollow.map((data,index) => (
                                <motion.div 
                                custom={index} 
                                animate={headAnimation4.animation} 
                                key={index} 
                                className="newsLastWholeSection-container-right-subscribeAndFollowContainer-cardsContainer-card"
                                 style={{ backgroundColor: `${data.bgColor}` }}
                                 >
                                    <a className="newsLastWholeSection-container-right-subscribeAndFollowContainer-cardsContainer-card-link" href={data.socialmedialink}>
                                        <div className="newsLastWholeSection-container-right-subscribeAndFollowContainer-cardsContainer-card-link-wrapper">
                                            <h5 className="newsLastWholeSection-container-right-subscribeAndFollowContainer-cardsContainer-card-link-wrapper-head">{data.socialmedianame}</h5>
                                            <p className="newsLastWholeSection-container-right-subscribeAndFollowContainer-cardsContainer-card-link-wrapper-para">{data.likes}</p>
                                        </div>
                                        <FontAwesomeIcon icon={data.logo} className="newsLastWholeSection-container-right-subscribeAndFollowContainer-cardsContainer-card-link-icon" />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default LastWholeSection
