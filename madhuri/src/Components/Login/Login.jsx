import { useNavigate } from "react-router-dom";
import "./login.css"

function Login(){
    const navigate = useNavigate();
    const handleLogin=()=>{
       navigate("/discoverpage")
    }
 return(
    <div className="login-page">
        <div className="login-card">
            <div className="wel">
            <h2 className="login-head">Welcome</h2>
            <img className="login-lock" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721897501/login-lock_jgxgyy.png" alt="jj"/>
            </div>
            <div className="login-details">
                <input className="username-login" type="text" placeholder="Username" required/>
                <input className="login-pswd" type="password" placeholder="Password" required/>
                <button onClick={handleLogin} className="login-btn">Login</button>
                <div className="login-card-links">
                    
                <a className="forgot-pswd" href="/forgetpassword">Forgot Password</a>
                <a className="new-acc" href="/signup">Create new account</a>
                </div>
            </div>
        </div>
    </div>
 )
}
export default Login;