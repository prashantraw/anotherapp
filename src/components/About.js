import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "cyan",
  // });

    let myStyle = {
      color: props.mode === 'dark'?'white':'darkslateblue',
      backgroundColor: props.mode === 'dark'?'darkslateblue':'white',
      border: '2px, solid',
      borderColor:  props.mode === 'dark'?'white':'black'
    }

  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "cyan",
  //       backgroundColor: "black",
  //       border: '1px solid white'
  //     })
  //     setBtnText("Enable Light Mode")
  //   }else{
  //       setMyStyle({
  //           color: "black",
  //           backgroundColor: "cyan",
  //           border: '1px solid white'
  //         })
  //         setBtnText("Enable Dark Mode")
  //       }
  // };

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Here you can analyze your text
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
            Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This website is free to use for everyone
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This website is also Browser Compatible
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
