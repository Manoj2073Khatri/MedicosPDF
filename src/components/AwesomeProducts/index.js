import React from 'react'
import { Button } from '../global/button'
import './_awesomeProduct.scss';

export const AwesomeProducts= ({awesomeProduct}) => {
    return (
        <div className="product-wrapper">
              <div className="product" > 
                  <div  className="product-card" >
                        <div className="product-card-iconImage">
                            {awesomeProduct.Icon}
                        </div>

                        <div className="product-card-details">
                            <div className="card-heading" >
                               <h5>{awesomeProduct.productTitle}</h5>
                            </div>
                            <p>{awesomeProduct.productDetails}</p>
                        </div>

                        <div className="product-card-bottom">
                            <div className="product-card-bottom-content">
                                {awesomeProduct.bottomIcon}
                                <div  className="product-card-bottom-content-btn">
                                    <Button type={awesomeProduct.bottomButtontype} label={awesomeProduct.bottomLabel}/>
                                </div>    
                                
                            </div>
                        
                        </div>

                  </div>
            
            </div>
        </div>
    )
}
