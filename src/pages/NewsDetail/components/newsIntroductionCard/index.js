import React from 'react'
import './_newsIntroductionCard.scss'
const NewsIntroductionCard = ({details}) => {
    return (
        <>
            <div className="newsIntroductionCard-wrapper">
                
                <div className="newsIntroductionCard-wrapper-description">
                    <h6 className="newsIntroductionCard-wrapper-description-head">Hello, I'm {details.name}
                        <div className="newsIntroductionCard-wrapper-description-head-img" style={{ backgroundImage: `url(${details.bgImage})` }}>
                        </div>
                    </h6>
                    <p className="newsIntroductionCard-wrapper-description-para"> {details.para}</p>
                    <button className="newsIntroductionCard-wrapper-description-btn"><a href={details.aboutmelink}>About me</a></button>
                </div>


          </div>
        </>
    )
}

export default NewsIntroductionCard
