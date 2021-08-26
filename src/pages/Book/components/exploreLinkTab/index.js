import React, { useState,useEffect } from 'react'
import { Headings } from '../../../../components/global/headings'
import './_exploreLinkTab.scss'


const ExploreLinkTab = ({links,activeData}) => {

    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
         activeData([...links.filter((data,index)=>index==activeTab)]);
    }, [activeTab])
   
    return (
        <nav className="exploreLink">
             <div className={`exploreLinkTab move${activeTab}`}> 

            {links.map((link, index) => (

                 <div key={index} className="exploreLinkTab-container">
                    {index == activeTab ?
                        <div className="exploreLinkTab-container-link-active" onClick={() => setActiveTab(index)}>
            
                            <Headings
                                className="tabText"
                                type="heading6"
                                href={link.url}
                                key={link.id}
                                content={link.linkName}
                            />
                         
                            
                        </div>                      
                        :
                        <div className="exploreLinkTab-container-link " onClick={() => setActiveTab(index)}>
                            <Headings
                                className="tabText"
                                type="heading6"
                                href={link.url}
                                key={link.id}
                                content={link.linkName}
                            />
                           
                          
                        </div>
                    }
                      
                </div>

            ))}
          
          </div>
          <div className="underline-active"></div>
           
        </nav>
    )
}

export default ExploreLinkTab
