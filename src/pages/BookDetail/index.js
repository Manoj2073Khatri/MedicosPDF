
import React,{useState} from 'react';
import { motion } from 'framer-motion';
import {
    useLocation
} from "react-router-dom";

//LOCAL IMPORTS
import { AiOutlineShareAlt, AiOutlineExclamationCircle, AiFillStar } from "react-icons/ai";
import "./index.scss";
import { appList, exploreLinks, ExploreMoreSliderDetails, footerBottomContent, relatedBooksSliderDetails } from '../../components/constants/mock';
import { Button } from '../../components/global/button';
import RelatedBooksSlider from './components/relatedBooksSlider';
import { Reviews } from './components/reviews';
import { reviews } from '../../components/constants/mock';
import { DisplayTitle } from '../../components/global/Titles';
import ExploreMoreSlider from './components/exploreMoreSubcategoriesSlider';


const transition = { duration: .4, ease: [0.6, 0.01, -0.05, 0.9] };

const imgVariants = {
    initial: {
        scale: .8,
        opacity: 0,
        y: 80,
        x: 50,
    },
    animate: {
        scale: 1,
        opacity: 1,
        y: 0,
        x: 0,
    }
}
const animate = {
    initial: {
        opacity: 0,
        y: 30,
        scale: .5
    },

    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        //   transition: { delay: .4},
    }
}
const BookDetail = () => {
    const location = useLocation();
    const { data,wholeData } = location.state;
    const [bookDetail,setBookDetails] = useState(JSON.parse(data))
    const [wholeBooksDetail,setWholeBookDetails] =useState(JSON.parse(wholeData));
    const relatedBooks= wholeBooksDetail.filter((data)=>data.title!=bookDetail.title);

   
   const activeData=(data)=>{
       setBookDetails(data)
       window.scrollTo({top:0,behavior:'smooth'});
   }
    return (
        <motion.div
            initial={{
                y: 400,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{ delay: .1, ...transition }}
            className="book-detail-page">
            <div className="book-detail-page-wrapper">
                <div className="book-detail-page-wrapper-book-detail-section">
                    <div className="book-detail-page-wrapper-book-detail-section-container">
                        <motion.img
                            variants={imgVariants}
                            initial='initial'
                            animate='animate'
                            transition={{ delay: .2, ...transition }}
                            src={bookDetail.image} />
                        <div className="book-detail-page-wrapper-book-detail-section-container-content">
                            <div className="book-title-section">
                                <motion.div
                                    variants={animate}
                                    initial='initial'
                                    animate='animate'
                                    transition={{ delay: .2, ...transition }}
                                    className="book-title">
                                    <h4>{bookDetail.title}</h4>
                                </motion.div>
                                <motion.div
                                    variants={animate}
                                    initial='initial'
                                    animate='animate'
                                    transition={{ delay: .2, ...transition }}
                                    className="icon-container">
                                    <div className="share">
                                        <AiOutlineShareAlt className="icon" />
                                    </div>
                                    <AiOutlineExclamationCircle className="icon" />
                                </motion.div>
                            </div>
                            <div className="book-rating-section">
                                <motion.div
                                    variants={animate}
                                    initial='initial'
                                    animate='animate'
                                    transition={{ delay: .3, ...transition }}
                                    className="star-container">
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <h6>{bookDetail.rating}</h6>
                                </motion.div>
                                <div className="views">
                                    <motion.p
                                        variants={animate}
                                        initial='initial'
                                        animate='animate'
                                        transition={{ delay: .3, ...transition }}
                                    >5K Views</motion.p>
                                </div>
                            </div>
                            <div className="book-summary-section">
                                <motion.h6
                                    variants={animate}
                                    initial='initial'
                                    animate='animate'
                                    transition={{ delay: .4, ...transition }}
                                >Summary</motion.h6>
                                <div className="summary">
                                    <motion.p
                                        variants={animate}
                                        initial='initial'
                                        animate='animate'
                                        transition={{ delay: .4, ...transition }}
                                    >{bookDetail.description}</motion.p>
                                </div>
                            </div>
                            <div className="book-author-section">
                                <motion.h6
                                    variants={animate}
                                    initial='initial'
                                    animate='animate'
                                    transition={{ delay: .5, ...transition }}
                                >Author</motion.h6>
                                <div className="summary">
                                    <motion.p
                                        variants={animate}
                                        initial='initial'
                                        animate='animate'
                                        transition={{ delay: .5, ...transition }}
                                    >{bookDetail.writer}</motion.p>
                                </div>
                            </div>
                            <motion.div
                                variants={animate}
                                initial='initial'
                                animate='animate'
                                transition={{ delay: .6, ...transition }}
                                className="book-button-container">
                                <Button type="secondary-rounded" label="Add to read" />
                                <div className="right-button" >
                                    <Button type="info-outline-rounded" label="Preview" labelColor="white" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="book-detail-page-wrapper-book-explore-section">
                    <div className="book-review-section">
                        <DisplayTitle type="display4" title="Write Reviews" />
                        <Reviews profilePic={require("../../assets/images/members.jpg")} reviews={reviews} />

                    </div>
                    <div className="related-book-section">
                        <DisplayTitle type="display4" title="Related Books" />
                        <div className="book-slider">
                            <RelatedBooksSlider slidesPerView={2} bookDetails={relatedBooks} activeData={activeData} />
                        </div>
                    </div>

                </div>
                <div className="explore-more-slider">
                    <ExploreMoreSlider slidesPerView={3} ExploreSliderDetails={ExploreMoreSliderDetails} />
                </div>
            </div>
        </motion.div>
    )
}

export default BookDetail
