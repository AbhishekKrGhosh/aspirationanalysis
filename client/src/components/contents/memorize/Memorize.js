import React from "react";
import './style.css'
import ContentInfo from "../../subcomponents/contentInfo/ContentInfo";
import ContentCard from "../../subcomponents/contentcard/ContentCard";
import memorize from '../../../assests/memorize.jpeg'
const text = "MEMORIZATION"
const info = "Master vocabulary and enhance memory retention with our effective word-based memorization techniques."

function Memorize({dark}){
    return(
        <div className="memorize">
            <ContentInfo dark={dark}  text={text} info={info}/>
            <ContentCard pic={memorize}/>
        </div>
)
}

export default Memorize