import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpCase = ()=>{
      //  console.log("button click");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted into uppercase!","success");
    }

    const handleLoCase = ()=>{
      //  console.log("button click");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted into lowercase!","success");
    }

    const handleClText = ()=>{
        //  console.log("button click");
          let newText = '';
          setText(newText);
          props.showAlert("Text Cleared!","success");
      }

    const handleRmSpaces = ()=>{
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
          props.showAlert("Text extra spaces removed","success");
      } 
      
    const handleCopyText = ()=>{
        var myText = document.getElementById("textBox");
        myText.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied on clipboard!","success");
      }   

    const handleOnChange = (event)=>{
       // console.log("button click1");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>   
            <h1>{props.heading}</h1>         
            <div className="mb-3">                                
                <textarea className="form-control" id="textBox" rows="8" value={text} onChange={handleOnChange}  style={{color:props.mode==='light'?'gray':'white',backgroundColor:props.mode==='light'?'white':'#143454'}}></textarea>
                <button className="btn btn-primary my-3 mx-1" onClick={handleUpCase}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleLoCase}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleClText}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleRmSpaces}>Remove Spaces</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleCopyText}>Copy Text</button>
            </div>
        </div>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{.008*text.length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter the text in the above textbox to preview it'}</p>
        </div>
        </>
    )
}
