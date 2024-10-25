import React, { useEffect, useRef } from 'react'

function StudentTenthMarksheet() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();

    let teluguMarksInputRef = useRef();
    let hindiMarksInputRef = useRef();
    let englishMarksInputRef = useRef();
    let mathsMarksInputRef = useRef();
    let scienceMarksInputRef = useRef();
    let socialMarksInputRef = useRef();
    let resultParagraphRef = useRef();

    let firstNameResultSpanRef = useRef();
    let lastNameResultSpanRef = useRef();
    let teluguResultSpanRef = useRef();
    let hindiResultSpanRef = useRef();
    let englishResultSpanRef = useRef();
    let mathsResultSpanRef = useRef();
    let scienceResultSpanRef = useRef();
    let socialResultSpanRef = useRef();

    useEffect( () => {

        console.log("Secondary Education Students Marksheet Form Loaded");

    },[]);

  return (
    <div>
        <form>
            <div className="marksheetDiv">
            <h1>Secondary Education Students Marksheet Form</h1>
            
            <fieldset>
                <legend>Personal Details</legend>
            <div className='firstName'>
                <label>First Name</label>
                <span className='spanSpacing'>:</span>
                <input ref={firstNameInputRef}
                    onFocus={ () => {
                        console.log("firstName on Focus");
                        firstNameInputRef.current.style.backgroundColor = "#bdc3c7";
                    }}
                    onChange={ () => {
                        console.log("firstName on change");
                    }}
                    onBlur={ () => {
                        console.log("firstName on Blur");
                        firstNameInputRef.current.style.backgroundColor = "";
                    }}


                ></input>
                <span ref={firstNameResultSpanRef} className="resultSpan"></span>
            </div>
            <div className='lastName'>
                <label>Last Name</label>
                <span className='spanSpacing'>:</span>
                <input ref={lastNameInputRef}
                    onFocus={ () => {
                        console.log("lastName on Focus");
                        lastNameInputRef.current.style.backgroundColor = "#bdc3c7";
                    }}
                    onChange={ () => {
                        console.log("lastName on change");
                    }}
                    onBlur={ () => {
                        console.log("lastName on Blur");
                        lastNameInputRef.current.style.backgroundColor = "";
                    }}
                
                
                ></input>
                <span ref={lastNameResultSpanRef} className="resultSpan"></span>
            </div>
            </fieldset>
            <fieldset>
            <legend>Mark Details</legend>
            <div className='telugu'>
                <label>Telugu</label>
                <span className='spanSpacing'>:</span>
                <input type="number" ref={teluguMarksInputRef}
                    onFocus={ () => {
                        console.log("telugu on focus")
                        teluguMarksInputRef.current.style.backgroundColor= "#bdc3c7)";
                        
                    }}
                    onChange={ ()=>{
                        console.log("telugu on change")
                        let marks = Number(teluguMarksInputRef.current.value);
                        console.log(marks>=35?"Pass":"Fail")
                        teluguResultSpanRef.current.innerHTML=marks>=35?"✅ Pass":" ❌ Fail";
                    }}
                    onBlur={ () => {
                        console.log("telugu on blur")
                        teluguMarksInputRef.current.style.backgroundColor= "";
                    }}
                ></input>
                <span ref={teluguResultSpanRef} className="resultSpan"></span>
            </div>
            <div className='hindi'>
                <label>Hindi</label>
                <span className='spanSpacing'>:</span>
                <input type="number" ref={hindiMarksInputRef}
                    onFocus={ () => {
                        console.log("hindi on focus")
                        hindiMarksInputRef.current.style.backgroundColor = "#bdc3c7";
                    }}
                    
                    onChange={ () => {
                        console.log("hindi on change")
                        let marks = Number(hindiMarksInputRef.current.value);
                        hindiResultSpanRef.current.innerHTML=marks>=35?"✅ Pass":" ❌ Fail";
                    }}

                    onBlur={ () => {
                        console.log("hindi on blur");
                        hindiMarksInputRef.current.style.backgroundColor = "";
                    }}
                ></input>
                <span ref={hindiResultSpanRef} className="resultSpan"></span>
            </div>
            <div className='english'>
                <label>English</label>
                <span className='spanSpacing'>:</span>
                <input type="number" ref={englishMarksInputRef}
                    onFocus={ () => {
                        console.log("english on focus");
                        englishMarksInputRef.current.style.backgroundColor="#bdc3c7";
                    }}
                    onChange={ () => {
                        console.log("english on change");
                        let marks = englishMarksInputRef.current.value
                        englishResultSpanRef.current.innerHTML = marks>=35?"✅ Pass":" ❌ Fail";
                    }}
                    onBlur={ () => {
                        console.log("english on blur");
                        englishMarksInputRef.current.style.backgroundColor="";
                    }}
                
                ></input>
                <span ref={englishResultSpanRef} className="resultSpan"></span>
            </div>
            <div className='maths'>
                <label>Maths</label>
                <span className='spanSpacing'>:</span>
                <input type="number" ref={mathsMarksInputRef}
                    onFocus={ () => {
                        console.log("maths on focus");
                        mathsMarksInputRef.current.style.backgroundColor = "#bdc3c7";
                    }}
                    onChange={ () => {
                        console.log("maths on change");
                        let marks = mathsMarksInputRef.current.value;
                        mathsResultSpanRef.current.innerHTML = marks>=35?"✅ Pass":" ❌ Fail";                    
                    }}
                    onBlur={ () => {
                        console.log("maths on blur");
                        mathsMarksInputRef.current.style.backgroundColor = "";
                    }}
                ></input>
                <span ref={mathsResultSpanRef} className="resultSpan"></span>
            </div>
            <div className='science'>
                <label>Science</label>
                <span className='spanSpacing'>:</span>
                <input type="number" ref={scienceMarksInputRef}
                    onFocus={ ()=> {
                        console.log("science on focus");
                        scienceMarksInputRef.current.style.backgroundColor = "#bdc3c7";
                    }}
                    onChange={ () => {
                        console.log("science on change");
                        let marks = scienceMarksInputRef.current.value;
                        scienceResultSpanRef.current.innerHTML = marks>=35?"✅ Pass":" ❌ Fail";
                    }}
                    onBlur={ () => {
                        console.log("science on blur");
                        scienceMarksInputRef.current.style.backgroundColor ="";
                    }}
                
                ></input>
                <span ref={scienceResultSpanRef} className="resultSpan"></span>
            </div>
            <div className='social'>
                <label>Social</label>
                <span className='spanSpacing'>:</span>
                <input type="number" ref={socialMarksInputRef}
                    onFocus={ () => {
                        console.log("social on focus");
                        socialMarksInputRef.current.style.backgroundColor = "#bdc3c7)";
                    }}
                    onChange={ () => {
                        console.log("social on change");
                        let marks = socialMarksInputRef.current.value;
                        socialResultSpanRef.current.innerHTML = marks>=35?"✅ Pass":" ❌ Fail";
                    }}
                    onBlur={ () => {
                        console.log("social on blur");
                        socialMarksInputRef.current.style.backgroundColor = "";
                    }}
                
                ></input>
                <span ref={socialResultSpanRef} className="resultSpan"></span>
            </div>
            <div>
                <button type='button'
                
                onMouseMove={ () => {

                    let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    let teluguMarks = Number(teluguMarksInputRef.current.value);
                    let hindiMarks = Number(hindiMarksInputRef.current.value);
                    let englishMarks = Number(englishMarksInputRef.current.value);
                    let mathsMarks = Number(mathsMarksInputRef.current.value);
                    let scienceMarks = Number(scienceMarksInputRef.current.value);
                    let socialMarks = Number(socialMarksInputRef.current.value);

                    let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;

                    let percentage = (totalMarks/600)*100;

                    resultParagraphRef.current.innerHTML = `${firstName} ${lastName}'s total Marks: ${totalMarks} with ${percentage.toFixed(2)}%`;

                    // alert(`total Marks: ${totalMarks} with ${percentage.toFixed(2)}%`)

                }}
                
                > Calculate Marks Result</button>
            </div>
            </fieldset>
            
            <p ref={resultParagraphRef}></p>

            </div>
        </form>
      
    </div>
  )
}

export default StudentTenthMarksheet
