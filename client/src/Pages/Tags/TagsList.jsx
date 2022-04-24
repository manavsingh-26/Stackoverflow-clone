import React from 'react'
import './Tags.css'
import { Link } from 'react-router-dom'


const TagsList = ({ tag }) => {
    return (
        <div className='tag'>
            
            <Link to={`/Tags/${tag.tagName}`}><button>{tag.tagName}</button></Link>
            <p>{tag.tagDesc}</p>
        </div>
    )
}

export default TagsList
