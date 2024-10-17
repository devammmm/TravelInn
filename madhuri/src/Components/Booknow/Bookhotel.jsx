import { useState } from "react";
import "./bookhotel.css"
import { useLocation } from "react-router-dom";
// import { useAppcontext } from "../AppContext";
function Bookhotel(){
    // const {name} = useAppcontext()
    const booknav=[
        {name:"Home",
            url:"/",
        },
        {name:"Discover",
            url:"/discover",
        },{name:"Packages",
            url:"/",
        },{name:"Contact",
            url:"/contact",
        },{name:"Logout",
            url:"/",
        }
    ]
    const location = useLocation();
    const [child,setChild] = useState(0)
    const [dec,setDec] = useState(0)
    const handleAdultin=()=>{
        setChild(child+1)
    }
    const handleAdultdec=()=>{
        setChild(child-1)
    }
    const handleChilddec=()=>{
        setDec(dec-1);
    }
    const handleChildinc=()=>{
        setDec(dec+1)
    }
    const [pay,setPay] = useState(false)
    const handlePay=()=>{

    }
  return(
    <div>
        <div className="discover-navbar">
                  <div className="discover-nav-logo">
                      <h1>Logo</h1>
                  </div>
                  <div className="discover-nav-links">
                     {booknav.map((item,key)=>(
                        <li key={key}>
                            <a href={item.url}><h3>{item.name}</h3></a>
                        </li>
                     ))}
                  </div>
              </div>
        <div className="trip-details">
            <img className="trip-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722403408/booktrip_nu08ne.png" alt="l"/>
            <div className="trip-det">
            <h2>Trip Name : {location.state.Name} </h2>
            <input type="text" className="book-name" placeholder="Name" required /><br/>
            <input type="number" className="book-mobile" placeholder="Mobile Number" required /><br/>
            <label>From   </label>
            <input type="Date" className="input-from" placeholder="From" required /><br/>
            <label>To   </label>
            <input type="Date" className="input-from" placeholder="From" required />
            <h3>Adult :  <button onClick={handleAdultin} className="trip-adult-inc"><b>+</b></button>{child}<button onClick={handleAdultdec} className="trip-adult-dec"><b>-</b></button></h3>
            <h3>Children :  <button onClick={handleChildinc} className="trip-adult-inc"><b>+</b></button>{dec}<button onClick={handleChilddec} className="trip-adult-dec"><b>-</b></button></h3>
             <h3>Price: Rs. 12999</h3>  
             <h3>Total Person : {child+dec}</h3> 
             <h3>Total Amount : {(child+dec)*12999} </h3>
             <button className="pay-now" onClick={handlePay}><b>Pay Now</b></button>
             
            </div>
        </div>
    </div>
  )
}

export default Bookhotel;