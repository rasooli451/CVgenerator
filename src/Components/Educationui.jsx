











export default function Educationui({obj}){
    return <div className="educationsect" style={obj.style}>
        <p>{obj.startDate} / {obj.endDate}</p>
        <div className="schoolinfo">
            <h3>{obj.school}</h3>
            <p>{obj.degree}</p>
            <p>GPA : {obj.gpa}</p>
        </div>
    </div>
}