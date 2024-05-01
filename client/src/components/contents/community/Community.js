import React from "react";
import './style.css'
import ContentInfo from "../../subcomponents/contentInfo/ContentInfo";
import ContentCard from "../../subcomponents/contentcard/ContentCard";
import community from '../../../assests/community.png'
const text = "COMMUNITY"
const info = "Join our vibrant educational community and connect with fellow learners, educators, and experts. Share knowledge, resources, and experiences while fostering collaboration and collective learning."

function Community({dark}){
    return(
        <div className="community">
            <ContentCard pic={community}/>
            <ContentInfo dark={dark} text={text} info={info}/>
            
        </div>
)
}

export default Community