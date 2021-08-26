import React from 'react'
import NewsDetailCategories from '../categories'
import FollowUs from '../followUs'
import InHypeSponsored from '../inHypeSponsored'
import NewsDetailAlsoRead from '../newsDetailAlsoRead'
import NewsDetailMoreFromInHype from '../newsDetailMoreFromInHype'
import NewsIntroductionCard from '../newsIntroductionCard'
import Trending from '../Trending'
import Comment from '../../../../components/comment/index';
import './_newsDetailBottomFullContainer.scss'

import {newsDetailAboutAuthorDetails,comments, newsDetailAlsoReadDetails, newsDetailCategoriesDetails, newsDetailFollowUsDetails, newsDetailInHypeSponsoredDetails, newsDetailMoreFromInHypeDetails, newsDetailTrendingDetails, newsIntroductionCardDetails } from '../../../../components/constants/mock';
import AboutAuthor from '../aboutAuthor'


const NewsDetailBottomFullContainer = ({details}) => {
    return (
        <>
          <div className="newsDetailBottomFullContainer-wrapper">
              <div className="newsDetailBottomFullContainer-wrapper-left">
                    <p className="newsDetailBottomFullContainer-wrapper-left-para1">From there, we generally start working on visual concepts that can make that vision more tangible. Our stakeholders are often editors with strong points of view on design and layout—and they love to edit whatever we come up with! Their perspective can give us essential focus as we move into development.</p>

                    <div className="newsDetailBottomFullContainer-wrapper-left-futureFocused">
                        <h3 className="newsDetailBottomFullContainer-wrapper-left-futureFocused-head">Future-focused</h3>
                        <p className="newsDetailBottomFullContainer-wrapper-left-futureFocused-para1">Even so, many believe there are less problematic and more effective ways to approach outdoors overcrowding than to avoid geotagging – it’s just not that simple. In her blog post, Williams recommends structural reforms for the USA, such as pushing for the promotion of state parks (which are typically less crowded than national parks) and more broadly backing initiatives that educate the public about environmental stewardship.
                            <br></br>
                            <br></br>
                            We are looking beyond ideation stage to, at the very least, beta, and for companies that are corporate-ready. Retailers want to see it all, so they usually have not precisely identified one tech they want to focus on. Visual search and fit-tech are definitely trends.
                        </p>
                        <div className="newsDetailBottomFullContainer-wrapper-left-futureFocused-images1">
                            {details.top.map(data=>(
                                <div key={data.id} className="newsDetailBottomFullContainer-wrapper-left-futureFocused-images1-img" style={{ backgroundImage: `url(${data.bgImage})` }}>
                                    <div className="newsDetailBottomFullContainer-wrapper-left-futureFocused-images1-img-bottom">
                                        {data.text}
                                    </div>    
                                </div>
                            ))}

                        </div>
                        <div className="newsDetailBottomFullContainer-wrapper-left-futureFocused-images2" style={{ backgroundImage: `url(${details.bottombgImg})` }}>
                            <div className="newsDetailBottomFullContainer-wrapper-left-futureFocused-images2-bottom">{details.bottomText}</div>
                        </div>
                       <div className="newsDetailBottomFullContainer-wrapper-left-futureFocused-para2">
                            <p className="newsDetailBottomFullContainer-wrapper-left-futureFocused-para2-col1">
                             From there, we generally start working on visual concepts that can make that vision more tangible. Our stakeholders are often editors with strong points of view on design and layout—and they love to edit whatever we come up with! Their perspective can give us essential focus as we move into development.
                            </p>
                            <p className="newsDetailBottomFullContainer-wrapper-left-futureFocused-para2-col2">
                              That’s because in spite of its iffy earnings reports over the last five years, Synergy Research reported that IBM had 7 percent of the cloud infrastructure market in its most recent report, which it defines as Infrastructure.
                            </p>
                       </div>
                        <p className="newsDetailBottomFullContainer-wrapper-left-futureFocused-para3">He gave the example of a plumber sending an invoice, and how they can tell if someone starts to create an invoice and can’t make it through the whole process. For a small business entrepreneur, “that’s a big deal because that means they’re not going to get paid, which means that tuition payment for their kid in college may be in jeopardy. So we take that really, really seriously.”</p>
                    </div>

                    <div className="newsDetailBottomFullContainer-wrapper-left-morefromHype">
                        <div className="newsDetailBottomFullContainer-wrapper-left-morefromHype-top">
                             <h3 className="newsDetailBottomFullContainer-wrapper-left-morefromHype-top-head1">More from InHype</h3>
                             <h6 className="newsDetailBottomFullContainer-wrapper-left-morefromHype-top-head2">More from InHype</h6>
                             <NewsDetailMoreFromInHype details={newsDetailMoreFromInHypeDetails}/>
                        </div>
                        
                        <p className="newsDetailBottomFullContainer-wrapper-left-morefromHype-para">Graduating from a top accelerator or incubator can be as career-defining for a startup founder as an elite university diploma. The intensive programmes, which are often just a few months long, help startups refine and grow before a “pitch day” to potential investors and press. Such schemes provide mentorship, money and networking, often in exchange for equity in the company..</p>
                        <h1 className="newsDetailBottomFullContainer-wrapper-left-morefromHype-head">The most important skill for a product leader is active listening. Be a good listener and you will naturally build trust across individuals, teams, and disciplines.</h1>
                        <p className="newsDetailBottomFullContainer-wrapper-left-morefromHype-para2">The current state of AI design has two major downsides:
                           <ul>
                             <li>What matters is understanding the hows and whys of trends’ emergence and adoption.</li>
                            <li>Because at the end of the day, trends have a lot to tell us about our cultural moment: what we love, what we hate, what we want to move toward.</li>
                            <li>The closer we get to understanding those things, the closer we get to getting inside others’ heads — to empathizing with them. And, really, to understanding ourselves. </li>
                           </ul>
                        </p>
                    </div>
                   
                   <div className="newsDetailBottomFullContainer-wrapper-left-alsoRead">
                      <NewsDetailAlsoRead details={newsDetailAlsoReadDetails} />
                      <p className="newsDetailBottomFullContainer-wrapper-left-alsoRead-para">Still, IE usage probably isn’t significant enough to fully explain the lack of grid adoption. So, consider that the stats cited above focus on page views, not pages. That means that it’s the lack of adoption of grid by major websites that more likely explains grid’s seemingly poor performance to date. </p>
                   </div>
                   

                    <div className="newsDetailBottomFullContainer-wrapper-left-blogging">
                      <h3 className="newsDetailBottomFullContainer-wrapper-left-blogging-head">We reinvented Blogging</h3>
                      <p className="newsDetailBottomFullContainer-wrapper-left-blogging-para">
                      Graduating from a top accelerator or incubator can be as career-defining for a startup founder as an elite university diploma. The intensive programmes, which are often just a few months long, help startups refine and grow before a “pitch day” to potential investors and press. Such schemes provide mentorship, money and networking, often in exchange for equity in the company..
                      <br></br>
                      <br></br>
                      Which makes sense. These major platforms probably only went all-in on flexbox fairly recently. And rejiggering the layouts of sites that attract billions of users is no small task. 
                      <br></br>
                      <br></br>
                      They can then go on to fix the problem. Diego finds that this is a great example of balancing qualitative and quantitative data. Too many data points, and not being clear about what you are measuring, can create confusion. And too few, like just measuring NPS, is hard to make actionable.
                      <br></br>
                      <br></br>
                      But finding the right balance between quantitative metrics and qualitative research will make insights actionable for every design team.
                      </p>
                      <Comment  comments={comments}/>
                    </div>
                   
                   {/* <AboutAuthor details={newsDetailAboutAuthorDetails}/> */}
                  
              </div>
              <div className="newsDetailBottomFullContainer-wrapper-right">
                    <NewsIntroductionCard details={newsIntroductionCardDetails} />
                    <Trending details={newsDetailTrendingDetails} />
                    <div className="newsDetailBottomFullContainer-wrapper-right-inhypeSponsored">
                        <h3 className="newsDetailBottomFullContainer-wrapper-right-inhypeSponsored-head">Inhype Sponsored</h3>
                       <InHypeSponsored details={newsDetailInHypeSponsoredDetails}/>
                    </div>    
                    <NewsDetailCategories details={newsDetailCategoriesDetails}/>
                    <FollowUs details={newsDetailFollowUsDetails} />
              </div>
          </div>
            
        </>
    )
}

export default NewsDetailBottomFullContainer
