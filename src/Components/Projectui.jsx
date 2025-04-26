






export default function Projectui({obj}){
    let bulletPoints = obj.description.split(".");
    return <div className="projectinfo" style={obj.style}>
    <div className="row">
        <h3>{obj.projectName + " - "}<i>{obj.tools}</i></h3>
        <a href={obj.link}>View Project</a>
    </div>
    <ul>
        {bulletPoints.map((point, index) => index < bulletPoints.length - 1 ? <li>{point + "."}</li> : null)}
    </ul>
</div>
}