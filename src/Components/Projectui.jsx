






export default function Projectui({obj}){
    let bulletPoints = obj.description.split("\n");
    return <div className="projectinfo" style={obj.style}>
    <div className="row">
        <h3>{obj.projectName + " - "}<i>{obj.tools}</i></h3>
        <a href={obj.link}>View Project</a>
    </div>
    <ul>
        {bulletPoints.map((point) => <li>{point}</li>)}
    </ul>
</div>
}