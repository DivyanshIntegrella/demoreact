import React, { useState, useEffect} from 'react'

export default function TextForm(){
    const [text, setText] = useState("Enter text here...");
    const [WordCount, updatecount] = useState(0);

    useEffect(() => {
        const words = text.split(' ');
        let WordCount = 0;

        words.forEach((word) => {
            if(word.trim() !== ''){
                WordCount++
            }
        })
        updatecount(WordCount);
    }, [text])

    const handleupevent= () =>{
        // console.log("Uppercase Button is Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handlelowevent= () =>{
        // console.log("Uppercase Button is Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleclear= () =>{
        setText(" ");
    }

    const handleonchange= (e) =>{
        // console.log("Change is made");
        setText(e.target.value);
    }

    // const WordCount= (setText) =>{
    //     let words = 0;
    //     for (let i = 0; i < WordCount.length; i++)
    //       if (setText(i) === " "){
    //         words = words++;
    //     }
    //     words += 1;
    //   }

    return(
        <>
        <div>
            <h1>Text to Analyze</h1>
            <div className='mb-3'>
                <textarea className='form-control' id="mybox" rows="5" value={text} onChange={handleonchange}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleupevent}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handlelowevent}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handleclear}>Clear</button>
        </div>
        <div className='container my-3'>
            <h2>Text Summary</h2>
            <p>{WordCount} words and {text.length} characters.</p>
            <p>{0.08*text.split(" ").length} Minutes to read this text.</p>
            <h2>Preview Text</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
