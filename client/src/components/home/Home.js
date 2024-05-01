import React, { useState } from "react";
import Plx from "react-plx";
import "./style.css";

function Home({dark}) {
  const TryNow = () => {
    const element = document.querySelector(".game")
        window.scrollTo({
            top:element?.getBoundingClientRect().top,
            left:0,
            behavior:'smooth'
        })
}
  return (
    <div className="home">
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <img style={{ width: "100%" }} src="bg3.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        {dark ? (
          <img
            style={{ width: "100%" }}
            src="background2.png"
            alt="background"
          />
        ) : (
          <img
            style={{ width: "100%" }}
            src="background3.png"
            alt="background"
          />
        )}
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%",
          zIndex: '202'
        }}
      >
        <img
          style={{
            width: "50vw",
          }}
          src="/text-img4.png"
          alt="Goonies"
        />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "none",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: "220vh",
          width: "100%",
          zIndex: 202,
        }}
      >
        <div className="button-sign">
        <button className="signin">
            SignIn
        </button>
        <button className="try" onClick={TryNow}>
            Try Now
        </button>
        </div>
        
      </Plx>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Home;
