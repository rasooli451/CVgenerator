



import { useState } from "react";












export default function Information(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[phoneNumber, setPhone] = useState("");
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
        if (firstName.length > 0 && lastName.length > 0 && email.length > 0 && phoneNumber.length > 0){
            //send an object with all of the information to parent
        }
    }
    function clearEverything(){
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setBackground("white");
        setFontColor("black");

    }
    return <form className="information section">
            <div className="formPart">
             <label for="firstName">F. Name: </label>
             <input type="text" id="firstName" required name="firstName" onChange={(e)=> handleChange(setFirstName, e)} value={firstName}/>
             </div>
             <div className="formPart">
             <label for="lastName">L. Name:   </label>
             <input type="text" id="lastName" required name="lastName" onChange={(e)=> handleChange(setLastName, e)} value={lastName}/>
             </div>
             <div className="formPart">
             <label for="email">Email:        </label>
             <input type="email" id="email" required name="email" onChange={(e)=> handleChange(setEmail, e)} value={email} />
             </div>
             <div className="formPart">
             <label for="phone">Phone #:      </label>
             <input type="text" id="phone" required name="phone" onChange={(e)=> handleChange(setPhone, e)}value={phoneNumber} />
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