import React from 'react'
import resetimage from '../../images/reset.svg';
// import background from '../../images/error.jpg';
import './_reset.scss';
import { FaEnvelope } from "react-icons/fa";
import { Button } from '../global/button';

export const ResetPassword = () => {
    return (
        
            <div className="reset">
                <div className="reset-card">
                    <div className="reset-card-top">
                    <img src={resetimage}></img>
                    <h5>Reset Password</h5>
                    </div>
                    <div className="reset-card-bottom">
                    <p>Enter your email to reset password</p>
                        <div className="reset-card-bottom-input">
                        <FaEnvelope/>
                        <input  type="textfield" placeholder="Email address"/> 

                        </div>
                        <Button type="primary" label="SEND"/>

                    </div>

                </div>
               
                
            </div>
    )
}
