import React from 'react'
import AuthorDateRead from '../../../News/components/author-date-readTime'
import './_trending.scss'
const Trending = ({details}) => {
    return (
        <>
        <div className="newsDetailTrending-wrapper">
            <h3 className="newsDetailTrending-wrapper-head">Trending</h3>
            <div className="newsDetailTrending-wrapper-description">
                {details.map(data=>(
                    <div key={data.id} className="newsDetailTrending-wrapper-description-wrapper">
                        <div className="newsDetailTrending-wrapper-description-wrapper-bgImg" style={{ backgroundImage: `url(${data.bgImg})` }}>
                        </div>
                        <h3 className="newsDetailTrending-wrapper-description-wrapper-head"><a href={data.headlink}>{data.head}</a></h3>
                        <AuthorDateRead  date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize} />
                    </div>
                ))}
            </div>
        </div>
            
        </>
    )
}

export default Trending
