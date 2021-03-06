import React,{useState} from "react";

export default function TextForm(props) {
  const [text,setText]=useState("Hello World");
  // setText("Hello User");
  const handleUPClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleOnChange=(e)=>{
    setText(e.target.value)
  }
  return (
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1"><h1>{props.heading}</h1></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8" value={text} onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUPClick}>Convert to UPPERCASE</button>
      </div>
  );
}
