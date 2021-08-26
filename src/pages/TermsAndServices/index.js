import React from 'react'
import './_termsAndServices.scss'
import {Button} from '../../components/global/button';

export const TermsAndServices = ({terms}) => {
    return (
        <div className="termsAndConditions-wrapper">
            <div className="termsAndConditions">
                <div className="termsAndConditions-content">
                <div className="termsAndConditions-content-muted-heading">
                <p>AGREEMENT</p>
                </div>
                <h2 className="termsAndConditions-content-heading">Terms And Services</h2>
                <p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ante magna pulvinar sem molestie aliquam non. Tincidunt viverra orci egestas sed. Viverra facilisis nunc, adipiscing amet, et,
                     sem etiam. Malesuada lectus dolor pharetra, pulvinar varius.</p>
                    <br/><br/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ante magna pulvinar sem molestie aliquam non. Tincidunt viverra orci egestas sed. Viverra facilisis nunc, adipiscing amet, et,
                     sem etiam. Malesuada lectus dolor pharetra, pulvinar varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ante magna pulvinar sem molestie aliquam non. Tincidunt viverra orci egestas sed. Viverra facilisis nunc, adipiscing amet, et,
                     sem etiam. Malesuada lectus dolor pharetra, pulvinar varius.
                    </p>
                    <br/><br/>
                    <ul className="topic">
                       {
                           terms.map((term)=>{
                               return <li>
                        {term.terms}
                        </li>
                           })
                       }
                    </ul>
                    <br/><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ante magna pulvinar sem molestie aliquam non. Tincidunt viverra orci egestas sed. Viverra facilisis nunc, adipiscing amet, et,
                     sem etiam.</p>
                    <br/><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ante magna pulvinar sem molestie aliquam non. Tincidunt viverra orci egestas sed. Viverra facilisis nunc, adipiscing amet, et,
                     sem etiam. Malesuada lectus dolor pharetra, pulvinar varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ante magna pulvinar sem molestie aliquam non. Tincidunt viverra orci egestas sed. Viverra facilisis nunc, adipiscing amet, et,
                     sem etiam.</p>
                </p>

                </div>
                <div className="termsAndConditions-button">
                   <button className="cancel">Not Right Now..</button>
                   <button className="accept">Accept the terms</button>
                

                </div>
            </div>

            
        </div>
    )
}
