import { useNavigate } from "react-router-dom";
import "./forgetpassword.css"

function Forgetpassword(){
  const navigate = useNavigate();
const handleReset=()=>{
  navigate("/Login");
}
  return(
    <div>
      <div className="forgot-pwd-page">
        <img className="forgot-main-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721984011/ppp_hnnejp.png" alt="pp"/>
           <div className="fp-card">
            <input className="np-input" type="password" placeholder="New Password" required />
            <input className="cp-input" type="password" placeholder="Confirm Password" required />
            <button onClick={handleReset} className="pwd-btn">Reset</button>
           </div>
      </div>
    </div>
  )
}
export default Forgetpassword;