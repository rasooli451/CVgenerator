





import { useState } from "react";



export default function Experience(){
    const [show, setShow] = useState(true);
    const [companyName, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const[startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [background, setBackground] = useState("white");
    const [fontColor, setFontColor] = useState("black");


    function handleChange(callback, e){
        callback(e.target.value);
        
    }

    function handleBackground(e){
        setBackground(e.target.value);
        setFontColor(e.target.fontColor);
    }

    function dealWithData(){
        if (companyName.length > 0 && title.length > 0 && startDate.length > 0 && endDate.length > 0 && description.length > 0){
            //send an object with all of the information to parent
        }
    }
    function clearEverything(){
        setCompanyName("");
        setTitle("");
        setStartDate("");
        setEndDate("");
        setDescription("");
        setBackground("white");
        setFontColor("black");
    }

    function toggleShow(){
        setShow(!show);
    }

    return !show ? <form className="section"><button className="toggle" type="button" onClick={toggleShow}>Experience</button></form> : <form className="Experience section">
        <button className="toggle" type="button" onClick={toggleShow}>Experience</button>
        <div className="formPart">
            <input id="companyName" name="companyName" placeholder="name of company..."required value={companyName} onChange={(e)=>handleChange(setCompanyName, e)}/>
        </div>
        <div className="formPart">
            <input id="title" name="title" required value={title} placeholder="title of job..."onChange={(e)=>handleChange(setTitle, e)}/>
        </div>
        <div className="formPart">
            <input id="startDate" name="startDate" required placeholder="the start date..."value={startDate} onChange={(e)=>handleChange(setStartDate, e)}/>
        </div>
        <div className="formPart">
            <input id="endDate" name="endDate" required placeholder="the end date..."value={endDate} onChange={(e)=>handleChange(setEndDate, e)}/>
        </div>
        <div className="formPart">
            <textarea name="description" id="description" placeholder="description of job..."onChange={(e)=>handleChange(setDescription, e)} value={description}></textarea>
        </div>
        <div className="formPart">
             <label htmlFor="background">Background Color: </label>
             <select name="background" id="background" value={background} fontcolor={fontColor} onChange={handleBackground}>
                <option value="white" selected fontcolor="black">White</option>
                <option value="black" fontcolor="white">Black</option>
                <option value="blue" fontcolor="black">Blue</option>
                <option value="yellow" fontcolor="black">Yellow</option>
                <option value="purple" fontcolor="white">Purple</option>
                <option value="green" fontcolor="black">Green</option>
                <option value="red" fontcolor="yellow">Red</option>
             </select>
             </div>
             <div className="formPart">
                  <button type="button" onClick={dealWithData}>Save</button>
                  <button type="button" onClick={clearEverything}>Reset</button>
             </div>
        
    </form>

}