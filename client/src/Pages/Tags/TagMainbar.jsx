import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import './TagsQuestion.css'
import QuestionList from './QuestionList'
import { useParams } from 'react-router'

const TagMainbar = () => {

    const location = useLocation()
    var user = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()
    const tagid = useParams()
 

    const questionsList = useSelector(state => state.questionsReducer)
  
    // var questionsList = [{ 
    //     _id: 3,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 1,
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'kumar',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }]

    const checkAuth = () => {
        if(user === null){
            alert("login or signup to ask a question")
            navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
    }

    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                <h1>Questions Tagged [{tagid.id}]</h1>
                <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            <div>
                {
                    questionsList.data === null ?
                    <h1>No Questions....</h1> :
                    <>
                        <p>All questions</p>
                        <QuestionList questionsList={questionsList.data} />
                    </>
                }
            </div>
        </div>
    )
}

export default TagMainbar
