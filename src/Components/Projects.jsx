





import { useState } from "react";


export default function Projects({onsave, id, ondelete}){
    const [show, setShow] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [link, setLink] = useState("");
    const [tools, setTools] = useState("");
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
        if (projectName.length > 0 && link.length > 0 && tools.length > 0 && description.length > 0){
            //send an object with all of the information to parent
            onsave({projectName, link, tools, description, id, style});
        }
    }
    function clearEverything(){
        setProjectName("");
        setLink("");
        setTools("");
        setDescription("");
        setStyle({background : "white", color : "black"});
    }

    function toggleShow(){
        setShow(!show);
    }

    function destroySelf(){
        ondelete(id);
    }
    return !show ? <form className="entry"><button className="toggle btn" type="button" onClick={toggleShow}>{projectName == "" ? "Project Name" : projectName}</button></form> : <form className="entry">
        <button className="toggle btn" type="button" onClick={toggleShow}>{projectName == "" ? "Project Name" : projectName}</button>
        <div className="formPart">
            <input id="projectName" name="projectName" placeholder="project name..."required value={projectName} onChange={(e)=>handleChange(setProjectName, e)}/>
        </div>
        <div className="formPart">
            <input id="tools" name="tools" required value={tools} placeholder="what was used(e.g : java, python etc)..." onChange={(e)=>handleChange(setTools, e)}/>
        </div>
        <div className="formPart">
            <input id="link" name="link" required placeholder="link for the project..."value={link} onChange={(e)=>handleChange(setLink, e)}/>
        </div>
        <div className="formPart">
            <textarea name="description" id="description" placeholder="accomplishments separated by dot..." onChange={(e)=>handleChange(setDescription, e)} value={description}></textarea>
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