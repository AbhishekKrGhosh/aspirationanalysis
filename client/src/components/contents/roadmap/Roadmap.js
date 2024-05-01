import React from "react";
import './style.css'
import ContentInfo from "../../subcomponents/contentInfo/ContentInfo";
import ContentCard from "../../subcomponents/contentcard/ContentCard";
import roadmap from '../../../assests/road-map.jpg'
const text = "ROADMAP"
const info = "Embark on a structured learning journey with our comprehensive roadmap. Designed to guide you through key milestones and learning objectives, our roadmap ensures a clear path to achieving your educational goals."
function Roadmap({dark}){
    return(
        <div className="roadmap">
            <ContentInfo dark={dark}  text={text} info={info}/>
            <ContentCard pic={roadmap}/>
        </div>
)
}

export default Roadmap