



import { useState } from "react";












export default function Information({onsave}){

    const[show, setShow] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[phoneNumber, setPhone] = useState("");
    const[style, setStyle] = useState({background : "white", color : "black"});

    
    function handleChange(callback, e){
        callback(e.target.value);
    }

    function handleBackground(e){
        
        let intel = e.target.value.split(",");
        setStyle({background : intel[0], color : intel[1]})
    }

    function dealWithData(){
        if (firstName.length > 0 && lastName.length > 0 && email.length > 0 && phoneNumber.length > 0){
            onsave({firstName, lastName, email, phoneNumber, style});
        }
    }
    function clearEverything(){
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setStyle({background : "white", color : "black"});
    }
    
    function toggleShow(){
        setShow(!show);
    }
    return !show ? <form className="section"><button className="toggle btn" type="button" onClick={toggleShow}>Information</button></form> : <form className="information section">
            <button className="toggle btn" type="button" onClick={toggleShow}>Information</button>
            <div className="formPart">
             <input type="text" id="firstName" placeholder="your first name..."required name="firstName" onChange={(e)=> handleChange(setFirstName, e)} value={firstName}/>
             </div>
             <div className="formPart">
             <input type="text" id="lastName" required placeholder="you last name..."name="lastName" onChange={(e)=> handleChange(setLastName, e)} value={lastName}/>
             </div>
             <div className="formPart">
             <input type="email" id="email" placeholder="your email..."required name="email" onChange={(e)=> handleChange(setEmail, e)} value={email} />
             </div>
             <div className="formPart">
             <input type="text" id="phone" required placeholder="your phone number..."name="phone" onChange={(e)=> handleChange(setPhone, e)}value={phoneNumber} />
             </div>
             <div className="formPart">
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
             <div className="formPart">
                  <button type="button" onClick={dealWithData} className="btn">Save</button>
                  <button type="button" onClick={clearEverything} className="btn">Reset</button>
             </div>
          </form>
}