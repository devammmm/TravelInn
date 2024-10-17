
import "./prac.css"
import { useState } from "react";

const message=[
    "Good Morning, Everyone!",
    "I am Deva Madhuri",
    "How are you guys?"
]


function Prac(){
   const [step,setStep] =useState(1) 
   const [incby,setIncby]= useState(0)
    // const [d,setD] = useState
   const [isopen,setisOpen] = useState(true)
   const dt = new Date("03 july 2024");
dt.setDate(dt.getDate() + incby)
   function inc(){
    setIncby(incby+1);
   
   }
   function dec(){
    setIncby(incby-1);

   }
    function handleClick(){
        if(step>1)
        setStep(step-1);
       
    }
    function handleNext(){
        if(step<3)
        setStep(step+1);
    }
    return (
        <div>
            <button className="close" onClick={()=>setisOpen(!isopen)}
>&times;</button>             
            
            {isopen &&(
        <div className="steps">
            <div className="numbers">
                
                <div className={step===1 ? "active":" "}>1</div>
                <div className={step===2 ? "active":" "}>2</div>
                <div className={step===3 ? "active":" "}>3</div>
            </div>
            <div className="message">
            
                <p> 
                    
                    Step {step}: {message[step-1]}
                </p>
                <p>value {incby}</p>
                <p> {dt.toDateString()}</p>
           
            </div>
            <div className="btn">
                    <button style={{backgroundColor:"red",color:"white"} }  onClick={handleClick}
                    >Previous</button>
                    <button style={{backgroundColor:"red",color:"white"}} onClick={handleNext}
                    >Next</button>
                    <button style={{backgroundColor:"beige", color:"black"}} onClick={inc}>+</button>
                    <button style={{backgroundColor:"beige", color:"black"}} onClick={dec}>-</button>
           
                        
        
             </div>

        </div>
)}
</div>
        
    )
}

export default Prac;