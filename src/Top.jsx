





import Information from "./Components/Information";
import Education from "./Components/Education";

import Experience from "./Components/Experience";

import Informationui from "./Components/Informationui";

import Educationui from "./Components/Educationui";

import "./top.css";
import { useState } from "react";


export default function Top(){
    //arguments to pass to each form component, a function to pass objects when they are saved in forms
    const [information, setInformation] = useState(null);
    const [education, setEducation] = useState(null);
    const [experience, setExperience] = useState(null);
    const [showEducation, setShowEducation] = useState(true);


    function hideComponent(obj, callback){
        callback(!obj);
    }

    function handleChange(obj, callback){
        callback(obj);
    }


    
    return <>
    <div className="forms">
    
    <Information onsave={(obj)=> handleChange(obj, setInformation)}/>
    <button className="hideComp" type="button" onClick={()=> hideComponent(showEducation, setShowEducation)}>Education</button>
    {showEducation ? <Education onsave={(obj)=> handleChange(obj, setEducation)}/> : <Education onsave={(obj)=> handleChange(obj, setEducation)} className="hide"/>}
    <Experience onsave={(obj)=> handleChange(obj, setExperience)}/>
    </div>
    <div className="result">
        <div className="information sect" style={information == null ? null : information.style}>
            <Informationui obj={information}/>
        </div>
        <div className="education sect" style={education == null ? null : education.style}>
            <h1>Education</h1>
            <Educationui obj={education}/>
        </div>
        <div className="experience sect"></div>
    </div>
    </>

}