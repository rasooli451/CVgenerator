








export default function Experienceui({obj}){
    let bulletPoints = obj.description.split("\n");
    return <div className="workinfo" style={obj.style}>
    <h3>{obj.title}</h3>
    <p>{obj.companyName}</p>
    <p>{obj.startDate} / {obj.endDate}</p>
    <ul>
        {bulletPoints.map((point) => <li>{point}</li>)}
    </ul>
</div>
}