











export default function Informationui({obj}){
    return obj == null ? <div className="infosect"><h1>Enter and Save to Show</h1></div> : <div className="infosect">
        <h1 className="fullName">{obj.firstName + " " + obj.lastName}</h1>
        <div className="otherInfo">
            <p>{obj.phoneNumber}</p>
            <p>{obj.email}</p>
            <p>{obj.location}</p>
        </div>
        <br/>
        <hr/>
    </div>
}