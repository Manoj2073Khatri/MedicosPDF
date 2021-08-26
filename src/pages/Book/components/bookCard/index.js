import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./index.scss";
import { Paragraphs } from '../../../../components/global/paragraphs';
import { Headings } from '../../../../components/global/headings';

const BookCard = ({ image, title, author, rating, }) => {
    return (
        <>
            <div className="book-card-container">
                <img src={image} alt="peopleImage" className="book-card-container-img" />
                <div className="book-card-container-content">
                    <Headings type="heading6" content={title} />
                    <p>{author}</p>
                    <div className="book-card-container-content-rating">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <div className="rating">
                            <Headings type="heading6" content={rating} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookCard;