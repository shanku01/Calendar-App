export default function MyList(props){
    return(
        <div className="my-list">
            <div className="time">
            <p >{props.timing}</p>
            </div>
            <div className="data">
            <p className="heading">Subject Code: {props.suject_code}</p>
            <p>Subject : {props.subject_name}</p>
            <p>Faculty : {props.teacher_name}</p>
            <p>Period Type : {props.period_type}</p>
            <p>Subject Type : {props.subject_type}</p>
            </div>
        </div>
    )
}