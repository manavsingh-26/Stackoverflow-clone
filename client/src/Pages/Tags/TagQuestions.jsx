import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import TagMainbar from './TagMainbar'

const TagQuestions = () => {
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <TagMainbar />
                <RightSidebar />
            </div>
        </div>
    )
  
}

export default TagQuestions