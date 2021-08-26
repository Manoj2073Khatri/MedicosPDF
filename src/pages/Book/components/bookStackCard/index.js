import React from 'react'
import './_bookStackCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const BookStackCard = ({ bookImage, title, authorInfo, rating, views }) => {
    return (
        <div className="bookStackCard-wrapper">
            <div className="bookStackCard-wrapper-infoCard">
                <h6 className="bookStackCard-wrapper-infoCard-heading">{title}</h6>
                <p className="bookStackCard-wrapper-infoCard-p">by {authorInfo} (author)</p>
                <div className="bookStackCard-wrapper-infoCard-bottom">
                    <div className="bookStackCard-wrapper-infoCard-bottom-col1">
                        <FontAwesomeIcon icon={faStar} className="bookStackCard-wrapper-infoCard-bottom-col1-icon" />
                        <h6 className="bookStackCard-wrapper-infoCard-bottom-col1-heading">{rating}</h6>
                    </div>
                    <p className="bookStackCard-wrapper-infoCard-bottom-p">{views}</p>
                </div>
            </div>
            <div className="bookStackCard-wrapper-bookCoverCard">
                <img src={bookImage.default} alt="book cover picture" />
            </div>

        </div>
    )
}

export default BookStackCard
