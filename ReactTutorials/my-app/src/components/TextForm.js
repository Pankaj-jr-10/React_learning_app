import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    props.showAlert("Converted to uppercase","success")
    setText(newText)
  };
  const handleReverseStr=()=>{
  let revText = text.split('').reverse().join('');
  props.showAlert("Converted to reverse string","success")
  setText(revText)
  }
  const handleClearAll = () => {
    let newTxt ="";
    props.showAlert("All Clears","success")
    setText(newTxt)
  }
  const removeExtraSpace = ()=>{
    let remSpace=text.split(/[  ]+/);
    setText(remSpace.join(" "))
    props.showAlert("Extra spaces removes!!","success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
    <div className="container" style={{color : props.mode === 'dark' ?'white':'black'}} >
      
      <div className="mt-3">
        <h4> {props.heading}</h4>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="3"   
          style={{backgroundColor : props.mode === 'light' ?'white':'grey',color : props.mode === 'dark' ?'white':'black'}}    
        ></textarea>
      </div>
      <button className="btn btn-primary mt-2 " onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mt-2 mx-2" onClick={handleClearAll}>
        Clear All
      </button>
      <button className="btn btn-primary mt-2 mx-2" onClick={handleReverseStr}>
        Reverse String
      </button>
      <button className="btn btn-primary mt-2 mx-2" onClick={removeExtraSpace}>
        Remove Space
      </button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark' ?'white':'black'}} >
    {/* */}
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
};

export default TextForm;
