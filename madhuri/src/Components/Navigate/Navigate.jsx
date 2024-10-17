import "./navigate.css"
import {useNavigate} from "react-router-dom";
function Navigate(){
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/Pro");

    }
    return (
        <button onClick={handleClick}>Click</button>
    )
}

export default Navigate;