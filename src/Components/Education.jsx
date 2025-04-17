








import { useState } from "react";




export default function Education({onsave}){
    const [show, setShow] = useState(true);
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [style, setStyle] = useState({background : "white", color : "black"});


    function toggleShow(){
        setShow(!show);
    }

    function handleChange(callback, e){
        callback(e.target.value);
    }

    function handleBackground(e){
        let intel = e.target.value.split(",");
        setStyle({background : intel[0], color : intel[1]})
    }

    function dealWithData(){
        if (school.length > 0 && degree.length > 0 && startDate.length > 0 && endDate.length > 0){
            onsave({school, degree, startDate, endDate, style});
        }
    }

    function clearEverything(){
        setSchool("");
        setDegree("");
        setStartDate("");
        setEndDate("");
        setStyle({background : "white", color : "black"});
    }
    return !show ? <form className="edu"><button className="toggle btn" type="button" onClick={toggleShow}>{school == "" ? "School Name" : school}</button></form> : <form className="edu">
        <button className="toggle btn" type="button" onClick={toggleShow}>{school == "" ? "School Name" : school}</button>
        <div className="formPart">
            <input type="text" required id="school" name="school" placeholder="your school..." value={school} onChange={(e)=> handleChange(setSchool, e)}/>
            </div>
            <div className="formPart">
            <input type="text" required id="degree" name="degree" placeholder="your degree..."value={degree} onChange={(e)=> handleChange(setDegree, e)}/>
            </div>
            <div className="formPart">
            <input type="text" required id="startDate" name="startDate" placeholder="the start date..." value={startDate} onChange={(e)=> handleChange(setStartDate, e)}/>
            </div>
            <div className="formPart">
            <input type="text" required id="endDate" name="endDate" placeholder="the end date..." value={endDate} onChange={(e)=> handleChange(setEndDate, e)}/>
            </div>
            <div className="formPart">
             <label htmlFor="background">Background Color: </label>
             <select name="background" id="background"  onChange={handleBackground}>
                <option value="white,black" selected >White</option>
                <option value="black,white" >Black</option>
                <option value="blue,black" >Blue</option>
                <option value="yellow,black" >Yellow</option>
                <option value="purple,white" >Purple</option>
                <option value="green,black" >Green</option>
                <option value="red,yellow" >Red</option>
             </select>
             </div>
             <div className="formPart">
                  <button type="button" className="btn" onClick={dealWithData}>Save</button>
                  <button type="button" className="btn" onClick={clearEverything}>Reset</button>
             </div>        
    </form>
}