import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import arr from "./items"
import "./navbar.css"
function Navbar(){
const name="Username"
const navigate = useNavigate()
const handleClicklogo=()=>{
 navigate("/");
}
const handleFavourites=()=>{
    navigate("/wishlist");
}
return (
    <nav className="navbar">
        <div className="appname">
        <h1 onClick={handleClicklogo}>APPNAME {name}</h1>
    </div>
    
   {arr.map((item,index)=>{
    return(
        <ul key={index} >
            <i className={item.icon}></i>
            
            <a  href={item.url}>
            {item.name}
            </a>
            </ul>

    )
   })}
   <div className="fav">
    <button className='fav-btn' onClick={handleFavourites}>  <i  class="fa-solid fa-heart"></i></button>
   </div>
   </nav>
   
      
    
)

}






export default Navbar;