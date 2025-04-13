





import Information from "./Components/Information";
import Education from "./Components/Education";

import Experience from "./Components/Experience";

import "./top.css";


export default function Top(){
    return <>
    <div className="forms">
    <Information />
    <Education />
    <Experience />
    </div>
    <div className="result">
        <h1>Enter and Save to Show the Result</h1>
    </div>
    </>

}