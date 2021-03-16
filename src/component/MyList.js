export default function MyList(props){
    return(
        <div className="my-list">
            <div className="time grid-item">
            <p >{props.data.timing}</p>
            </div>
            <div className="data grid-item">
            <p className="heading">Subject Code: {props.data.subject_code}</p>
            <p><span className="bold">Subject</span> : {props.data.subject_name}</p>
            <p><span className="bold">Faculty</span>: {props.data.teacher_name}</p>
            <p><span className="bold">Period Type</span>: {props.data.period_type}</p>
            <p><span className="bold">Subject Type </span>: {props.data.subject_type}</p>
            </div>
        </div>
    )
}