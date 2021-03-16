import MyList from "./MyList";

export default function ModalComponent(props){
    return(
        <div className="modal">
            <button 
            onClick={props.clickHandler}
            >Close</button>
            <h1 className="date">{props.date}</h1>
            {
                props.data.map(item=>{
                    return <MyList key={item.period_id} data={item}/>
                })
            }
        </div>
    )
}