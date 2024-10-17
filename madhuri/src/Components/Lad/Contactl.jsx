
import "./contact.css"


function Contactl(){
    const connav=[
        {name:"Home",url:"/"},
        {name:"About Us",url:"/aboutl"},{name:"Login",url:"/Login"},{name:"Sign Up",url:"/signup"},
    ]
    const sym=[
        {cname:"fa-solid fa-phone",
            num:"+91 7729981525"
        },
        {cname:"fa-solid fa-envelope",
            num:"travelinn@gmail.com"
        },
        {cname:"fa-solid fa-location-pin",
            num:"tchennaiifnjneijcnofenvc"
        }
    ]
    return(
        <div>
            <div className="contact-nav">
            <div className="contact-nav-logo">
            <div className="navlogo">
            <img className="logo" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722872594/logo_mzv7ly.png" alt="o"/>
            <h2>TravelInn</h2>
            </div>
            </div>
            <div className="contact-nav-links">
            {connav.map((item)=>(
                <a href={item.url} ><h3 className="about-nav-h">{item.name}</h3> </a>
            ))}
            </div>
            
            </div>
            <div className="contactl-matter">
                <img className="conatctl-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721884643/conatctl_zl0lkb.png" alt="w"/>
                <h1 className="que">Have some question ?</h1>
                <div className="contact-form-card">
                   <div className="card-con-mat">
                    <input className="fname" type="text" placeholder="First Name" required/>
                    <input className="lname" type="text" placeholder="Last Name" required/>
                    <input className="mob" type="number" placeholder="Mobile Number" required/>
                    <textarea className="msg" placeholder="Enter Message"></textarea>
                    <button className="send-btn">Send Message</button>
                    </div>
                </div>
            <div className="down">
            <h1 className="get-head">For further queries <br/>contact us</h1>
                <h1 className="contactl-h">Get in Touch</h1>
                <div className="contactl-card">
                    <div className="con-card-mat">
                      {sym.map((item)=>(
                        <div className="oo">
                        <div className="onesym">
                        <i class={item.cname} ></i>
                        </div>
                        <h2 className="sym-h">{item.num}</h2>
                        </div>
                      ))}
                    </div>
                    
                </div>
              </div>
            </div>  
                
         <div className="footer">
            <h3>footer</h3>
         </div>
        </div>
    )

}
export default Contactl;