import Header from "../Header/Header";
import "./footer.css"
function Footer(){
  const naat=17;
  const nat = new Date().getHours();
  console.log(naat)
  const ope=10;
  const close=22;
  const open = naat>=ope && naat<=close;
  
  //  if(!open) 
  //   return(
  // <p>not opened until {ope}</p>
  // )
  
  return (
    // <div className="ft">
        // {open ?(
        //   <div>
        //    <h1>True</h1>
        //   </div>
        //   : <div><h1>false</h1></div>}
        // )
          // (open && 
          // <div>
          //  <h1>Successfully learned the terinary opoerator!</h1> </div>)
       
        // <h1>footer</h1>{new Date().toLocaleString()}
        
        
    // </div>
  <div>
      
    {open  ? (
      <div>
        <p>Logged in successfully! Welcome Username</p>
        </div>
      
    ) : (
      <div>
        <h1>
          We are sorry your credentials are not right , Please try again!
        </h1>
      </div>
    )
}
</div>
  );
}
export default Footer;