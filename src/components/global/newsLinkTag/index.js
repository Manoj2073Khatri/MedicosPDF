import React from 'react'
import './_newsLinkTag.scss'
const NewsLinkTag = ({color,tag,link}) => {
    return (
        <span className="newsLinkTag-container">
            <a href={link} className='newsLinkTag-link'>
                <div className="newsLinkTag-link-circle" style={{backgroundColor:`${color}`}}></div>
                <div className="newsLinkTag-link-text">{tag}</div>
            </a>
       </span>
    )
}

export default NewsLinkTag
