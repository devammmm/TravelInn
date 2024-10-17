
import Navbar from "../Navbar/Navbar";
import "./discover.css"
import { createContext, useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { store } from "../../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bookstatus from "./Bookstatus";
import Exploring from "./Exploring";
import Adventure from "./Adventure"

// import { BrowserRouter,Route, Routes } from "react-router-dom";


function Discover(){
  useEffect(() => {if(isBooked){console.log("Book Status",isBooked); toast.success("Trip Booked Successfully!")}}, [])
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5;
  const [isBooked, setIsBooked] = useContext(store);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0));
  };

  return (
    <>
      <Navbar />
      <h1 className="heading">
            Discover the world with us!....
        </h1>
        <div className="slideshow">
        <div
          id="carousel"
          className="slideshowsider"
          style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          <div  className="item">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721124686/img1_u4tnog.jpg" alt="1"/>
          </div>
          <div  className="item">
          <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721123810/img2_y1l4mw.jpg" alt="2"/>
          </div>
          <div  className="item">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721123811/img4_sjliv7.jpg" alt="3"/>
          </div>
          <div  className="item">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721123831/img3_n8gool.jpg" alt="4"/>
          </div>
          <div  className="item">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721123818/img5_mf2ebf.jpg" alt="5"/>
          </div>
          <ToastContainer />

        </div>
      </div>

      <div className="btn">
        <button type="button" onClick={handlePrev}>
          prev
        </button>
        <button type="button" onClick={handleNext}>
          next
        </button>
      </div>
      <Placestovisit />
     
      <Adventure />
      <Exploring/>
      {/* <Exploring /> 
      <Fun /> */}
      </>
  )
}

function Placestovisit(){
  const pvarr =[
    {
      srcc :"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721125638/pv5_qlmquw.jpg",
      alt:"pv1",
      name:"Florence, Italy"
  
    },
    {
      srcc :"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721125641/pv2_slc7cn.jpg",
      alt:"pv2",
       name:"Cancun , Mexico"
  
    },
    {
      srcc :"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721125640/pv3_dkjuub.jpg",
      alt:"pv3",
       name:"Amalfi Coast , Italy"
  
    },
    {
      srcc :"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721125639/pv4_svudmi.jpg",
      alt:"pv4",
       name:"San Fransisco"
  
    },
    {
      srcc :"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721125638/pv6_pnvnvr.jpg",
      alt:"pv5",
       name:"Great Barrier Reef, Australia"
  
    },
    {
      srcc :"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721125640/pv1_cshtim.jpg",
      alt:"pv6",
       name:"Argentine Patagonia"
  
    }
  ]
  return(
    <div>
    <h1  className="pvh">Places to visit..</h1>
    <div className="pcards">
 
         {pvarr.map((item)=>{
          return(
            <div>
            <div className="pcard">
           <img className="pvimg" src={item.srcc} alt={item.alt}/>
           </div>
           <div className="arrow">
           <h3 className="pvhh">{item.name}</h3>
           <button className="arbtn"><i  class="fa-solid fa-arrow-right"></i></button>
           </div>
           </div>
        )        
         })}
     
    </div>
    </div>
  )
}

// function Exploring(){
//   return(
//  <div className="pp">
// <p>sidjiu</p>
//  </div>
//   )
// }
// function Fun(){
//   return(
//     <div>
//     <p>hi i am fun</p>
        
//     </div>
//   )
// }
export default Discover;