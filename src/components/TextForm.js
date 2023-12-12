import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclick = () => {
        // console.log("up");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloclick = () => {
        // console.log("up");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color:props.mode === 'light'?'#212529' : 'white'}}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'light' ? 'light' : 'white', color:props.mode === 'dark'?'dark' : '#212529'} } onChange={handleonchange} placeholder='Enter somthing'  rows="8" id="floatingTextarea"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to Uppercase </button>
                <button className="btn btn-primary" onClick={handleloclick}>Convert to Lowercase </button>

            </div>
            <div className="container my-3" style={{color:props.mode === 'dark'?'white' : '#212529'}}>
                <h1> Your Text summary </h1>
                <p> {text.split(" ").length} words and {text.length} character</p>
                <p> {0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <div className="mb-3">
            <textarea className="form-control" value={text} placeholder={text.length>0?text:"Enter somthing in above textbox"} rows={8}></textarea>
                </div>


            </div>
        </>
    )
}
