





import { useState } from "react";



export default function Experience(){
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

    return <form className="Experience section">
        <div className="formPart">
            <label for="companyName">Company: </label>
            <input id="companyName" name="companyName" required value={companyName} onChange={(e)=>handleChange(setCompanyName, e)}/>
        </div>
        <div className="formPart">
            <label for="title">Title: </label>
            <input id="title" name="title" required value={title} onChange={(e)=>handleChange(setTitle, e)}/>
        </div>
        <div className="formPart">
            <label for="startDate">Start Date: </label>
            <input id="startDate" name="startDate" required value={startDate} onChange={(e)=>handleChange(setStartDate, e)}/>
        </div>
        <div className="formPart">
            <label for="endDate">End Date: </label>
            <input id="endDate" name="endDate" required value={endDate} onChange={(e)=>handleChange(setEndDate, e)}/>
        </div>
        <div className="formPart">
            <label for="description">Description: </label>
            <textarea name="description" id="description" onChange={(e)=>handleChange(setDescription, e)} value={description}></textarea>
        </div>
        <div className="formPart">
             <label for="background">Background Color: </label>
             <select name="background" id="background" value={background} fontColor={fontColor} onChange={handleBackground}>
                <option value="white" selected fontColor="black">White</option>
                <option value="black" fontColor="white">Black</option>
                <option value="blue" fontColor="black">Blue</option>
                <option value="yellow" fontColor="black">Yellow</option>
                <option value="purple" fontColor="white">Purple</option>
                <option value="green" fontColor="black">Green</option>
                <option value="red" fontColor="yellow">Red</option>
             </select>
             </div>
             <div className="formPart">
                  <button type="button" onClick={dealWithData}>Save</button>
                  <button type="button" onClick={clearEverything}>Reset</button>
             </div>
        
    </form>

}