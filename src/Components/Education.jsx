








import { useState } from "react";




export default function Education(){
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const[background, setBackground] = useState("white");
    const[fontColor, setFontColor] = useState("black");



    function handleChange(callback, e){
        callback(e.target.value);
    }

    function handleBackground(e){
        setBackground(e.target.value);
        setFontColor(e.target.fontColor);
    }

    function dealWithData(){
        
    }

    function clearEverything(){
        setSchool("");
        setDegree("");
        setStartDate("");
        setEndDate("");
        setBackground("white");
        setFontColor("black");
    }
    return <form className="Education section">
        <div className="formPart">
            <label for="school">School: </label>
            <input type="text" required id="school" name="school" value={school} onChange={(e)=> handleChange(setSchool, e)}/>
            </div>
            <div className="formPart">
            <label for="degree">Degree: </label>
            <input type="text" required id="degree" name="degree" value={degree} onChange={(e)=> handleChange(setDegree, e)}/>
            </div>
            <div className="formPart">
            <label for="startDate">Start Date: </label>
            <input type="text" required id="startDate" name="startDate" value={startDate} onChange={(e)=> handleChange(setStartDate, e)}/>
            </div>
            <div className="formPart">
            <label for="endDate">End Date: </label>
            <input type="text" required id="endDate" name="endDate" value={endDate} onChange={(e)=> handleChange(setEndDate, e)}/>
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