import { useNavigate } from "react-router-dom";
import Aboutl from "./Aboutl";
import "./lad.css"

function Lad(){
    
return (
    <div>
        <div className="land-nav">
        <div className="navlogo">
            <img className="logo" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722872594/logo_mzv7ly.png" alt="o"/>
            <h2>TravelInn</h2>
            </div>
            <div className="nav-det">
        <h3><a href="/aboutl" >About Us</a></h3>
        <h3><a href="/contactl" >Contact Us</a></h3>            
            <h3><a href="/Login" >Login</a></h3>
            <h3><a href="/signup" >Sign Up</a></h3>
            </div>
        </div>
        <div className="pack-land">
            <a href="/family"><h3>Family Packages</h3></a>
            <a href="/holidaypackage"><h3>Holiday Packages</h3></a>
            {/* <a href=""><h3>Holiday Deals</h3></a> */}
            <a href="/hotels"><h3>Hotels</h3></a>
            <a href="/adventures"><h3>Adventures</h3></a>
        </div>
        <div className="land-page">
        <div className="view-land">
            <img className="land-img-main" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721814146/land_qnbpwb.png" alt="rr" />
            <h1 className="land-main-h"> Customize & Book<br/>
            Amazing Holiday Packages</h1>
            <button className="land-main-btn"><b>Know More</b></button>
            {/* <img className="land-img-main1" src="" alt="w"/> */}
        </div>      
        <Ladcard />
        <DealsCard />
        <Customerreviews />
        <Footer />
        </div>
    </div>
)
}

function Ladcard(){
    const feaarr=[
        {title:"Search and Booking"},
        {title:"Language and Currency Support"},
        {title:"Travel Alert and Safety Trips"},
        {title:"Destination guides and information"},


    ]
    return(
        <div>
            <h1 className="features-h">Our Features</h1>
            <div className="feature-cards">
               {feaarr.map((item)=>(
                <div className="feature-card">
                    <h2>{item.title}</h2>
                </div>
               ))}
            </div>
            
        </div>
    )
}

function DealsCard(){
    const navigate = useNavigate();
    const handlesignup=()=>{
     navigate("/signup")
    }
    return(
        <div className="delas">
            <h2 className="deals-card-dh">Get instant discount </h2>
            <div className="deals-card">
                <h3 className="deals-card-h">Sign up and get flat 30% off on your first trip.</h3>
                <button onClick={handlesignup} className="deals-card-btn">Sign up</button>
            </div>
        </div>
    )
}

export function Footer(){
    const farr=[
        {link:"link1",
        },
        {link:"link1",
        },
        {link:"link1",
        },{link:"link1",
        }
    ]  
    return(
        <div className="footer-home">
            <div className="footer-content">
                <h2>Footer content</h2>
                </div>
              <div className="links">
                {farr.map((item)=>(
                    <div className="linkss">
                    <div className="link1">
                        <a href=""><h3>{item.link}</h3></a>
                    </div>
                    <div className="link1">
                    <a href=""><h3>{item.link}</h3></a>
                    </div>
                    <div className="link1">
                    <a href=""><h3>{item.link}</h3></a>
                    </div>
                    </div>
                ))}
              </div>
        </div>
    )
}

function Customerreviews(){
    const cust=[
        {name:"charan",
            matt:"",
            rat:""
        },
        {name:"nitisha",
            matt:"",
            rat:""
        },
        {name:"koti",
            matt:"",
            rat:""
        },
    ]
    return(
        <div>
          <div className="cust-review">
            <img className="custrev-img" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721827097/cust_l3favv.png" />
            <h1 className="custh"><b>Customer <br/>Reviews</b></h1>
            <button className="cust-rev-btn"><b>View Reviews</b></button>
          </div>

        </div>
    )
}

export default Lad;