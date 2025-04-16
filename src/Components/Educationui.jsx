











export default function Educationui({obj}){


    return obj == null ? <h1>Enter and Save to Show</h1> : <div className="educationsect">
        <p>{obj.startDate} - {obj.endDate}</p>
        <div className="schoolinfo">
            <h3>{obj.school}</h3>
            <p>{obj.degree}</p>
        </div>
    </div>
}