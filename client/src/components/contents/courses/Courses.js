import React from "react";
import './style.css'
import ContentInfo from "../../subcomponents/contentInfo/ContentInfo";
import ContentCard from "../../subcomponents/contentcard/ContentCard";
import courses from '../../../assests/courses.jpg'
const text = "COURSES"
const info = "Dive into the best diverse range of courses selected to cater to various learning needs. From interactive video lectures to engaging quizzes, assignments, and discussions, these courses provide a dynamic learning experience."
function Courses({dark}){
    return(
        <div className="courses">
            <ContentCard pic={courses}/>
            <ContentInfo dark={dark}  text={text} info={info}/>
            
        </div>
)
}

export default Courses