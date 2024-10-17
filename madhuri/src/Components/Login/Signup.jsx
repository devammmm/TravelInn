import "./signup.css"
import { useNavigate } from "react-router-dom";
function Signup(){
    const navigate = useNavigate();
    const handlesignup=()=>{
        navigate("/login")
    }
    return(
        <div className="bg">
            <div className="signup-page">
                <div className="signup-img">
               <img className="signup-page-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721973664/signup_nzwyfq.png" alt="o"/>
               </div>
               <div className="signup-inputs">
                <input className="signup-name" type="text"  placeholder="Name" required />
                <input className="signup-email" type="text" placeholder="Email" required />
                <input className="signup-num" type="number" placeholder="Mobile Number" required />
                <input className="signup-pwd" type="password" placeholder="Password" required />
                <button className="signup-btn" onClick={handlesignup}><b>Sign Up</b></button>
                Already have an account <a href="/Login">Login here</a> 
               </div>
            </div>

        </div>
    )
}

export default Signup;