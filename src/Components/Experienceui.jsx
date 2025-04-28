


import { useState } from "react";





export default function Experienceui({obj}){
    let bulletPoints = obj.description.split(".");
    return <div className="workinfo" style={obj.style}>
    <h3>{obj.title}</h3>
    <p>{obj.companyName}</p>
    <p>{obj.startDate} / {obj.endDate}</p>
    <ul>
        {bulletPoints.map((point, index) => index < bulletPoints.length - 1 ? <li>{point + "."}</li> : null)}
    </ul>
</div>
}