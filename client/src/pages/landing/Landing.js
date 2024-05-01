import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Home from "../../components/home/Home";
import Content from "../../components/contents/Content";
import Videos from "../../components/videos/Videos";
import ContactUs from "../../components/contact/ContactUs";

function Landing({dark, setDark, threeD, setThreeD}){
    return(
        <div>
      <Navbar setDark={setDark} dark={dark} threeD={threeD} setThreeD={setThreeD}/>
      <Home dark={dark}/>
      <Content dark={dark} threeD={threeD}/>
      <Videos dark={dark}/>
      <ContactUs dark={dark}/>
    </div>
)
}

export default Landing