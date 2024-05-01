import React from "react";
import './style.css'
import ContentInfo from "../../subcomponents/contentInfo/ContentInfo";
import ContentCard from "../../subcomponents/contentcard/ContentCard";
import game from '../../../assests/game.jpg'
const text = "GAME"
const info = "Make learning fun with our educational games. Designed to combine entertainment with learning objectives, these games engage and challenge learners while enhancing knowledge retention."

function Game({dark}){
    return(
        <div className="game">
            <ContentCard pic={game}/>
            <ContentInfo dark={dark}  text={text} info={info}/>
            
        </div>
)
}

export default Game