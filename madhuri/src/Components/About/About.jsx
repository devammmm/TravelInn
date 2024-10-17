import { useState } from "react";
import "./about.css"

function About(){

  const [visible,setVisible] = useState(false)
  
  const handleAbout=()=>{
     setVisible(true)
  }
  const handleClose = ()=>{
    setVisible(false)
  }
    return (
      
        <div className="all">
         {
          visible && (
            <div className="model-ctn">
            <h1 className="headtext">
              Hi there!
              </h1>
              <button onClick={handleClose}><i class="fa-solid fa-x"></i></button>
            
          </div>
          )
         }
        <div className="maincl">
      <div className={visible ? "all-blur":"he"}>
        
       <h1>ABOUT US</h1>
       <hr/>
       </div>
        <h1>Helping People to travel their dream destinations.</h1>
          <p className="para">The messaging is short, featuring only a paragraph of copy and a video, yet it speaks volumes for the user to understand that they are a leader in business streaming and in navigating all its complexities.</p>
       <button className="viewmore" onClick={handleAbout}><i class="fa-solid fa-arrow-right"></i></button>
       </div>
          <img className="ima" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721039680/aboutus_prx5v2.gif" alt="s" />
        </div>
        
      
      

    )
}
export default About;