import React, { useState } from 'react'
import { Headings } from '../../../../components/global/headings'
import './_subcatagories.scss'

export const SubCatagories = ({ subCategories }) => {
    const [active, setActive] = useState(subCategories[0])
    return (
        <div className="subcatagories">
            {
                subCategories.map((item) => {

                    return <div className="subcatagories-items" key={item}>
                        <p className={active === item ? 'subcatagories-items-topic active' : 'subcatagories-items-topic '}
                            onClick={() => setActive(item)}>- {item}</p>
                    </div>

                })
            }

        </div>
    )
}
