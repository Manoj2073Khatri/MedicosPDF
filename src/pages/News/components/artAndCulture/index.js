import React from 'react'
import './_artAndCulture.scss'
import NewsLinkTag from '../../../../components/global/newsLinkTag'
import AuthorDateRead from '../author-date-readTime'
import { motion } from 'framer-motion';
import CustomAnimation from '../../../customAnimation/index'

const hidden={
    opacity:0,
    x:-100,
}
const visible={
    opacity:1,
    x:0,
    transition:{
        delay:.3,
        ease:'easeIn'
    }
   }
const hiddenS={
    opacity:0,
    y:100,
}
const visibleS={
    opacity:1,
    y:0,
    transition:{
        delay:.3,
        ease:'easeIn'
    }
   }


const ArtAndCulture = ({details}) => {
    const btnCustomAnimation=CustomAnimation(hidden,visible,.1);
    const slideCustomAnimation=CustomAnimation(hiddenS,visibleS,.1);
    return (
        <>

          <div className="ArtAndCulture-wrapper">
              <h3 className="ArtAndCulture-wrapper-head1">Art & Culture</h3>
              <h6 className="ArtAndCulture-wrapper-head2">FROM ALL OVER THE WORLD</h6>
              <div  ref={slideCustomAnimation.ref}  className="ArtAndCulture-wrapper-description">
                  {details.map(data=>(
                    <motion.div  animate={slideCustomAnimation.animation}  key={data.id} className="ArtAndCulture-wrapper-description-img" style={{backgroundImage:`url(${data.bgImg})`}}>
                        <div className="ArtAndCulture-wrapper-description-img-inner">
                            <NewsLinkTag key={data.tag.id} color={data.tag.color} tag={data.tag.tag} link={data.tag.link} />
                            <h3 className="ArtAndCulture-wrapper-description-img-inner-heading"><a href={data.headinglink}>{data.heading}</a></h3>
                            <AuthorDateRead  date={data.dateAndTime.date} readTime={data.dateAndTime.readTime} color={data.dateAndTime.color} fontSize={data.dateAndTime.fontSize}  />
                        </div>
                    </motion.div>
                  ))}
                 
              </div>
              <motion.button
               ref={btnCustomAnimation.ref} 
               animate={btnCustomAnimation.animation} 
               whileHover={{
                  backgroundColor:'#48494b',
                   transition: { duration: .25 },
               }}
               className="ArtAndCulture-wrapper-btn">Load more</motion.button>
          </div>
            
        </>
    )
}

export default ArtAndCulture
