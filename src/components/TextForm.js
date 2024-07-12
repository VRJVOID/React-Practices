import React, { useState } from "react";

function TextForm(props) {
  const handleClick = () => {
    console.log("I am clicked", +text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleClick1 = () => {
    console.log("I am clicked", +text);
    let newText1 = text.toLowerCase();
    setText(newText1);
  };

  const handleClick2 = () => {
    console.log("I am clicked", +text);
    let newText1 ='';
    let ch;
    for(let i in text)
    {
        ch = text[i];
        if(ch === 'a' || ch === 'e' || ch === 'i' ||
            ch === 'o' || ch === 'u')
            {
                newText1 = newText1 + ch;
                }
                }
                setText(newText1);
                };

                
  const handleClick3 = () => {
    console.log("I am clicked", +text);
    let newText1 = '';
    let ch;
    for(let i=text.length;i>=0;i--){
        ch = text.charAt(i);
        newText1 = newText1 + ch;
    }
    setText(newText1);
  };



  const handleOnChange = (e) => {
    console.log("I am changed");
    setText(e.target.value);
  };
  const [text, setText] = useState(" ");

  return (
    <>
      <div>
        <h1>{props.heading} </h1>

        <div className=" container mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClick1}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClick2}>
          Vowel
        </button>
    

      
      <button className="btn btn-primary mx-2" onClick={handleClick3}>
          Reverse
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
       </div>
    </>
  );
}

//For counter

// function TextForm(props) {
//     const handleClick =()=>{
//         console.log("I am clicked", +count)
//         let newText = count+1;
//         setCount(newText)
//     }

//     const handleOnChange =(e)=>{
//         console.log("I am changed")
//         setCount(e.target.value)
//     }
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{props.heading} </h1>

//       <div className="mb-3">
//         <textarea
//           className="form-control"
//           id="myBox"
//           value={count}
//           onChange={handleOnChange}
//           rows="8"
//         ></textarea>
//       </div>
//       <button className="btn btn-primary" onClick={handleClick}>
//         Increament Counter
//       </button>
//     </div>
//   );
// }

export default TextForm;
