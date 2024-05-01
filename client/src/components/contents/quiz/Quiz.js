import React from "react";
import './style.css'
import ContentInfo from "../../subcomponents/contentInfo/ContentInfo";
import ContentCard from "../../subcomponents/contentcard/ContentCard";
import quiz from '../../../assests/quiz.png'
const text = "QUIZ"
const info = "Test your knowledge and reinforce learning with our interactive quizzes. Explore multiple-choice and true/false to assess your understanding and track your progress."

function Quiz({dark}){
    return(
        <div className="quiz">
            <ContentInfo dark={dark}  text={text} info={info}/>
            <ContentCard pic={quiz}/>
        </div>
)
}

export default Quiz