import React,{useState} from 'react'
import './_dropdownSingle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons'


const DropdownSingle = (props) => {

//    console.log(props.datas);
    const [dropdown, setDropdown] = useState(false);
    const toggling = () =>setDropdown(!dropdown);

    return (
        <div>
            <div className="dropdown-wrapper">
                <h4>DropDowns</h4>
                <p>Single level</p>
                <button onClick={toggling}>click me</button>
                <ul className={`dropdown ${dropdown? 'dropdownshow':'dropdown'}`}>
                    {props.datas.map((name,index)=>(
                        <li key={index}>
                            <img src={name.image} className="icon" />
                            <a href={name.url}>{name.link}</a>
                        </li>
                    ))}
                
                
                </ul>
            </div>
        </div>
    )
}

export default DropdownSingle
