import React from 'react'
import Questions from './Questions'
import { useParams } from 'react-router'

const QuestionList = ({questionsList}) => {

    const tagid = useParams()
 

    return (
        <>
            {
                questionsList.map((question) => (
                    question.questionTags.indexOf(tagid.id) > -1?
                      <Questions question={question} key={question._id}/>
                         : null
                    
            
                ))
            }
        </>
    )
}

export default QuestionList
