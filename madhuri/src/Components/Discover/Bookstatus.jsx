import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import "./bookstatus.css"
import { store } from "../../App";
function Bookstatus(){
    const [incad,setIncad]= useState(0);
    const [incch,setIncch] = useState(0);
    const [isBooked, setIsBooked] = useContext(store);
    const location = useLocation()
    const handleInc=()=>{
        setIncad(incad+1);
    }
    const handleDec=()=>{
        setIncad(incad-1);
    }
    const handleIncc=()=>{
        setIncch(incch+1);
    }
    const handleDecc=()=>{
        setIncch(incch-1);
    }
    const navigate = useNavigate();
    const handlebooknow=()=>{
        console.log("Book Status",isBooked);
        setIsBooked(true);
        navigate("/discover");
    }
    const sum = incad+incch;
    return(
        <div>
            <div className="had">
           <h1 c>Book your trip</h1> 
           </div>
           <div className="bookcard">
            <img className="bookimag" src={location.state.imga} alt="jj"/>
            <div className="book-ma">
            <h2>Booking for title: {location.state.title}</h2>
            <div className="book-form">
                <div className="f1">
            <label>Name</label>
            <input type="text" />
            </div>
            <div className="f2">
            <label>Mobile</label>
            <input type="text" />
            </div>
          
            <h2>description about the adventure.....................</h2>
            
            <div className="book-btn">
            <h3>Adults</h3>
            <button onClick={handleInc}>+</button>
            <h3>{incad}</h3>
            <button onClick={handleDec}>-</button>      
            <h3>Children</h3>
            <button onClick={handleIncc}>+</button>
            <h3>{incch}</h3>
            <button onClick={handleDecc}>-</button>
            <h3>Total : {sum}</h3>
            </div>
            <h3>Place : {location.state.from}</h3>
            <h3>Price : {location.state.price}</h3>
            {/* <div className="booknow"> */}
            <button className="booknow" onClick={handlebooknow}>Book Now</button>
            <ToastContainer />

            {/* </div> */}
            </div>
            </div>
           </div>
          
        </div>
    )
}

export default Bookstatus;