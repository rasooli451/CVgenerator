





import Information from "./Components/formComponents/Information";
import Education from "./Components/formComponents/Education";
import Experience from "./Components/formComponents/Experience";
import Informationui from "./Components/cvComponents/Informationui";
import Educationui from "./Components/cvComponents/Educationui";
import Experienceui from "./Components/cvComponents/Experienceui";
import Projects from "./Components/formComponents/Projects";
import Projectui from "./Components/cvComponents/Projectui";
import "./top.css";
import { useState } from "react";
import {jsPDF} from "../node_modules/jspdf";
import html2canvas from "../node_modules/html2canvas";



export default function Top(){
    const [information, setInformation] = useState(null);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [project, setProject] = useState([]);
    const [projectForm, setProjectForm] = useState(["36b8f84d-df4e-4d49-b662-bcde71a8764f"]);
    const [projectbg, setProjectBg] = useState({background: "white", color : "black"});
    const [educationForm, setEducationForm] = useState(["36b8f84d-df4e-4d49-b662-bcde71a8764f"]);
    const [experienceForm, setExperienceForm] = useState(["36b8f84d-df4e-4d49-b662-bcde71a8764f"]);
    const [educationbg, setEducationBg] = useState({background: "white", color : "black"});
    const [experiencebg, setExperienceBg] = useState({background: "white", color : "black"});
    let yPos = 0; //global Yposition variable to help with pdf generation
    let pdf = new jsPDF('p', 'mm', 'a4'); //global pdf object to help with pdf generation

    function changeInfo(obj){
        setInformation(obj);
    }

    function handleChange(obj, callback){
        let inserted = false;
        callback((o) => o.map((item) => {
            if (item.id == obj.id){
                inserted = true;
                return obj;
            }
            else{
                return item;
            }
        }));
        if (!inserted){
            callback(o => [...o, obj]);
        }
    }

    function removeEntry(id, callback1, callback2){
        callback1((o) => o.filter((item) => item.id != id));
        callback2((o) => o.filter((formId) => formId != id));
    }

    function addMoreForms(obj, callback){
        callback(o => [...o, obj]);
    }
    
    function handleBackground(e, callback){
        let intel = e.target.value.split(",");
        callback({background : intel[0], color : intel[1]})
    }

 

    async function downloadPdf(){
            let result = document.querySelector(".result");
            await recursiveAdd(result);
            pdf.save("cv.pdf");
            pdf = new jsPDF('p', 'mm', 'a4');
            yPos = 0;
        }

    async function recursiveAdd(part){
        if (part.classList.contains("information") || part.classList.contains("educationsect") || part.classList.contains("workinfo") || part.classList.contains("projectinfo") || part.classList.contains("header")){
            await html2canvas(part, {
                scale: 4, // Increase scale for better resolution
                useCORS: true,
                logging: true,
                letterRendering: true,
                allowTaint: true
              }).then(canvas => {
                  const imgWidth = 210; // A4 width in mm
                  const imgHeight = (canvas.height * imgWidth) / canvas.width;
                  const imgData = canvas.toDataURL('image/png', 1.0);
                  if (yPos + imgHeight > 297){
                    pdf.addPage();
                    yPos = 20;
                    pdf.addImage(imgData, 'PNG', 0, yPos, imgWidth, imgHeight);
                  }
                  else{
                    pdf.addImage(imgData, 'PNG', 0, yPos, imgWidth, imgHeight);
                  }
                  yPos += imgHeight;
              })
        }
        else{
            const elementList = Array.from(part.children);
            for (let i = 0; i < elementList.length; i++){
                await recursiveAdd(elementList[i]);
            }

        }
    }
    return <>
    <h1 className="mainTitle">CV generator</h1>
    <main className="main">
    <div className="forms">
    <Information onsave={(obj)=> changeInfo(obj)}/>
    <div className="Education">
    <div className="btns">
    <button className="more btn" type="button" onClick={()=> addMoreForms(crypto.randomUUID(), setEducationForm)}>Add More</button>
    <div>
        <label htmlFor="background">Background Color: </label>
             <select name="background" id="background"  onChange={(e) => handleBackground(e, setEducationBg)}>
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
        educationForm.map((item)=>(
            <Education key={item} id = {item} onsave={(obj)=> handleChange(obj, setEducation)} ondelete = {(id) => removeEntry(id, setEducation, setEducationForm)}/>
        ))
    }
    </div>
    <div className="Experience">
    <div className="btns">
    <button className="more btn" type="button" onClick={()=> addMoreForms(crypto.randomUUID(),setExperienceForm)}>Add More</button>
    <div>
        <label htmlFor="background">Background Color: </label>
             <select name="background" id="background"  onChange={(e) => handleBackground(e, setExperienceBg)}>
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
        experienceForm.map((item)=>(
            <Experience key={item} id = {item} onsave={(obj)=> handleChange(obj, setExperience)} ondelete = {(id) => removeEntry(id, setExperience, setExperienceForm)}/>
        ))
    }
    </div>
    <div className="Project">
    <div className="btns">
    <button className="more btn" type="button" onClick={()=> addMoreForms(crypto.randomUUID(),setProjectForm)}>Add More</button>
    <div>
        <label htmlFor="background">Background Color: </label>
             <select name="background" id="background"  onChange={(e) => handleBackground(e, setProjectBg)}>
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
        projectForm.map((item)=>(
            <Projects key={item} id = {item} onsave={(obj)=> handleChange(obj, setProject)} ondelete = {(id) => removeEntry(id, setProject, setProjectForm)}/>
        ))
    }
    </div>
    <button className="btn" type="button" onClick={downloadPdf}>Download PDF</button>
    </div>
    <div className="result">
        <div className="information sect" style={information == null ? null : information.style}>
            <Informationui obj={information}/>
        </div>
        <div className="education sect" style={education.length == 0 ? null : educationbg}>
            {
                education.length == 0 ? null : <div className="header" style={education.length == 0 ? null : educationbg}><h2>Education</h2></div>
            }
            {education.length == 0 ? null : 
                education.map((item)=>(
                    <Educationui obj={item} key={item.id}/>
                ))
            }
        </div>
        <div className="experience sect" style={experience.length == 0 ? null : experiencebg}>
            {
                experience.length == 0 ? null : <div className="header" style={experience.length == 0 ? null : experiencebg}><h2>Experience</h2></div>
            }
            {experience.length == 0 ? null : 
                 experience.map((item) => (
                    <Experienceui obj={item} key={item.id}/>
                 ))}
        </div>
        <div className="project sect" style={project.length == 0 ? null : projectbg}>
            {
                project.length == 0 ? null : <div className="header" style={project.length == 0 ? null : projectbg}><h2>Projects</h2></div>
            }
            {project.length == 0 ? null : 
                 project.map((item) => (
                    <Projectui obj={item} key={item.id}/>
                 ))}
        </div>
    </div>
    </main>
    </>

}