import React,{useState} from 'react'
import './_tags.scss'


const Tags = (props) => {

    const [tags, setTags] = useState(props.tags);
    const removeTags = indexToRemove => {
      setTags([...tags.filter((value, index) => index !== indexToRemove)]);
      props.selectedTags([...tags.filter((value, index) => index !== indexToRemove)]);
    };
    const addTags = event => {
      if (event.target.value !== "") {
        setTags([...tags, event.target.value]);
        props.selectedTags([...tags, event.target.value]);
        event.target.value = "";
      }
    };
    return (
        <>
            <h6>Tags</h6>
            <div className="tags-wrapper">
                <ul className="tags">
                    {tags.map((tag, index) => (
                    <li key={index} className="tags-tag">
                        <span className='tags-tag-title'>{tag}</span>
                        <span className='tags-tag-close-icon'
                        onClick={() => removeTags(index)}
                        >
                        x
                        </span>
                    </li>
                    ))}
                </ul>
                <input
                    type="text"
                    onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                    placeholder="+ Add"
                    
                />
            </div>
  
        </>
    )
}

export default Tags
