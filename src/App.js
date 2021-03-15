// import {useState,useEffect} from "react";
// import axios from "axios"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from "react-modal";
import ModalComponent from "./component/ModalComponent";

function App() {
  // const days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
  // const {data,setData} = useState([])
  // const {lec,setlec} = useState()
  // const {date,setDate} = useState()
  // const {isOpen,setIsOpen} =useState(false)

  // useEffect(()=>{
  //   // callApi();
  // }
  // );

  // function callApi(){
  //   axios({
  //     method:"GET",
  //     url: 'https://www.presencex.com/REVA/school/gettimetable',
  //     headers:{
  //       ContentType:"application/json",
  //       year:"",
  //       class:"",
  //       section:"A",
  //       semester:3,
  //       stream:"str003",
  //       request_date:"03/12/2020",
  //       api_key:"da7b0a5b6396da422ef093ce1c59fc0ee8971406b480f02e2d64cf39f42b896e",
  //       school_id:"SCH10100"
  //     }
  //   })
  //   .then(res=>
  //     {console.log(res.json)}
  //     )
  //   .catch(error =>{console.log(error)}
  //   )
  // };

  //Setting Lecture
  //  function getLecture(day){
  //   let x;
  //   for(x in data){
  //     if(data[x].day==day){
  //       setLec(data[x].lec)
  //     }
  //   }
  //  }

  //Onclick Setting Lecture for Modal
   function onChange(value){
    //  const day = days[value.getDay()]
    //  getLecture(day)
    // setIsOpen(true)
    // setDate(value.toLocaleDateString())
   }
  return (
    <div className="App">
    <Calendar 
      onChange={(value,event)=>{
        event.preventDefault()
        onChange(value)
      }}
    />
    <Modal 
    isOpen={false} 
    style={{
    overlay: {
      position: 'fixed',
      top: "0%",
      left: "0%",
      width:"100%",
      height:"100%",
      backgroundColor: 'white',
      opacity:0.7,
      borderRadius:"20px",
    },
    content: {
      position: 'absolute',
      display:"block",
      border:"none",
      background: '#fff',
      overflow: 'auto',
      outline: 'none',
      padding: '10px',
      backgroundColor: 'white',
      opacity:0.8,
    }
  }}>
      <ModalComponent 
      // key={date} 
      // data={lec}
      // date={date} 
      // clickHandler={event=>{
      //   event.preventDefault();
      //   setIsOpen(false)}}
      // I am good
        />
    </Modal>
    </div>
  );
}

export default App;
