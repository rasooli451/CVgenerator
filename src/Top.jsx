





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
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [educationForm, setEducationForm] = useState([null]);
    const [educationbg, setEducationBg] = useState({background: "white", color : "black"});

    function changeInfo(obj){
        setInformation(obj);
    }

    function handleChange(obj, callback){
        callback(o => [...o, obj]);
    }
    
    function handleBackground(e){
        let intel = e.target.value.split(",");
        setEducationBg({background : intel[0], color : intel[1]})
    }
    return <>
    <div className="forms">
    
    <Information onsave={(obj)=> changeInfo(obj)}/>
    <div className="Education">
    <div className="btns">
    <button className="more btn" type="button" onClick={()=> handleChange(null, setEducationForm)}>Add More</button>
    <div>
        <label htmlFor="background">Background Color: </label>
             <select name="background" id="background"  onChange={handleBackground}>
                <option value="white,black" selected >White</option>
                <option value="black,white" >Black</option>
                <option value="blue,black" >Blue</option>
                <option value="yellow,black" >Yellow</option>
                <option value="purple,white">Purple</option>
                <option value="green,black">Green</option>
                <option value="red,yellow">Red</option>
             </select>
             </div>
    </div>
    {
        educationForm.map((item,index)=>(
            <Education key={index} onsave={(obj)=> handleChange(obj, setEducation)}/>
        ))
    }
    </div>
    <Experience onsave={(obj)=> handleChange(obj, setExperience)}/>
    </div>
    <div className="result">
        <div className="information sect" style={information == null ? null : information.style}>
            <Informationui obj={information}/>
        </div>
        <div className="education sect" style={education.length == 0 ? null : educationbg}>
            <h1>Education</h1>
            {education.length == 0 ? <h1>Enter and Save to Show</h1> : 
                education.map((item, index)=>(
                    <Educationui obj={item} key={index} style={item.style}/>
                ))
            }
        </div>
        <div className="experience sect"></div>
    </div>
    </>

}