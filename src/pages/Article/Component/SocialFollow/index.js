import React from 'react'
import { SocialFollower } from '../../../../components/global/SocialFollower'
import './_socialfollow.scss';

export const SocialFollow = () => {

    return (
    <div className="socialfollow">
    <h3 className="socialfollow-heading"> Social Follow and Subscribe </h3>
         <SocialFollower type="facebook" label="Facebook" icon="facebook" followers="52 likes"/>
        <SocialFollower type="instagram" label="Instagram" icon="instagram" followers="52k followers"/>
        <SocialFollower type="twitter" label="Twitter" icon="twitter" followers="52k followers"/>
        <SocialFollower type="youtube" label="Youtube" icon="youtube" followers="52k followers"/>
            
        </div>
    )
}
