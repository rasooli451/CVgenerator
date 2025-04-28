





import { useState } from "react";



export default function Experience({onsave, id, ondelete}){
    const [show, setShow] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const[startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [style, setStyle] = useState({background : "white", color : "black"});


    

    function handleChange(callback, e){
        callback(e.target.value);
    }

    function handleBackground(e){
        let intel = e.target.value.split(",");
        setStyle({background : intel[0], color : intel[1]})
    }

    function dealWithData(){
        if (companyName.length > 0 && title.length > 0 && startDate.length > 0 && endDate.length > 0 && description.length > 0){
            //send an object with all of the information to parent
            onsave({companyName, title, startDate, endDate, description, id, style});
        }
    }
    function clearEverything(){
        setCompanyName("");
        setTitle("");
        setStartDate("");
        setEndDate("");
        setDescription("");
        setStyle({background : "white", color : "black"});
    }

    function toggleShow(){
        setShow(!show);
    }

    function destroySelf(){
        ondelete(id);
    }

    return !show ? <form className="entry"><button className="toggle btn" type="button" onClick={toggleShow}>{companyName == "" ? "Company Name" : companyName}</button></form> : <form className="entry">
        <button className="toggle btn" type="button" onClick={toggleShow}>{companyName == "" ? "Company Name" : companyName}</button>
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
            <textarea name="description" id="description" placeholder="Responsibilites separated by dot..."onChange={(e)=>handleChange(setDescription, e)} value={description}></textarea>
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
                  <button type="button" onClick={dealWithData} className="btn">Save</button>
                  <button type="button" onClick={clearEverything} className="btn">Reset</button>
                  <button type="button" className="btn" onClick={destroySelf}>Remove</button>
             </div>
        
    </form>

}