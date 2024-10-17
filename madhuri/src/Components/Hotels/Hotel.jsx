import { useNavigate } from "react-router-dom"
import "./hotel.css"

function Hotel(){
    const hotelnav=[
        {name:"Home",
            url:"/",
        },
        {name:"Discover",
            url:"/discoverpage",
        },{name:"Family Deals",
            url:"/",
        },{name:"Contact",
            url:"/contact",
        },{name:"Logout",
            url:"/",
        }
    ]
    const hotels=[
        {name:" Claridge, London",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722419496/hotell1_jhlde6.jpg",
            price:"15462"
        },
        {name:"Cashel Palce, Ireland",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722419495/hotel2_x8bn7w.jpg",
            price:"18999"
        },
        {name:"The Dorchester, London",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722419495/hotel3_bymqwr.jpg",
            price:"17899"
        },
        {name:"Finca Cortesin, Malga, Spain",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722419493/hotel4_rgyid8.jpg",
            price:"24999"
        },
    ]
    const resortss=[
        {name:"Chileno Bay Resort",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722420785/res1_aspc1p.jpg",
            price:"26759"
        },
        {name:"Herman Bungalows",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722420785/res2_ve2daa.jpg",
            price:"33459"
        },
        {name:"Brentwood Bay Resort",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722420782/res3_jmetqo.jpg",
            price:"29999"
        },
        {name:"Cabot Cape Breton",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722420780/res4_d69soo.jpg",
            price:"27899"
        },
        {name:"Nita Lake Lodge",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722420778/res5_qcvzl2.webp",
            price:"33456"
        },
        {name:"Marbella",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722420777/res6_hxceca.jpg",
            price:"33333"
        },
        {name:"Alpina",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722420774/res7_ksiske.jpg",
            price:"29998"
        },
        {name:"Amara",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722420772/res8_afaucx.jpg",
            price:"38599"
        },
        {name:"Bisma Eight",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722420771/res9_fbhmoq.jpg",
            price:"40999"
        },
    ]
    const navigate = useNavigate();
    const handleHotel=(Name,price)=>{
        navigate("/booknowtrip",{state:{Name,price}})
    }
    const handleResort=(Name,price)=>{
        navigate("/booknowtrip",{state:{Name,price}})
    }
return(
    <div>
        <div className="hotel-navbar">
        <div className="discover-navbar">
                  <div className="discover-nav-logo">
                  <div className="navlogo">
            <img className="logo" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722872594/logo_mzv7ly.png" alt="o"/>
            <h2>TravelInn</h2>
            </div>
                  </div>
                  <div className="discover-nav-links">
                     {hotelnav.map((item,key)=>(
                        <li key={key}>
                            <a href={item.url}><h3>{item.name}</h3></a>
                        </li>
                     ))}
                  </div>
              </div>

        </div>
        <div className="hotel-main-page">
            <img className="hotel-main-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722011915/hotel_gewnle.png" alt="e" />
            <img className="rat-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722012679/rat_j9x2b9.png" alt="w"/>
            <h1 className="hotel-main-head">Our hospitality is your key to a perfect stay.</h1>
            <div className="hotels">
               <h1 className="hotels-head">Explore Your Ideal Hotel Stay</h1>  
               <div className="hotel-cards">
                {hotels.map((item,key)=>(
                    <li key={key} className="hotel-card" >
                        <img src={item.img} className="hotel-card-image" alt="f"/>
                        <div className="hotel-matter">
                        <h2 className="hotel-card-head">{item.name}</h2>
                        <button className="hotel-card-btn" onClick={()=>handleHotel(item.name,item.price)}>View</button>
                        {/* <h2 className="hotel-card-price">{item.price}</h2> */}
                        </div>
                    </li>
                ))}
                </div>   
       </div> 
       <div className="resorts">
        <h1 className="resort-head">Find Your Ideal Resort Escape</h1>
        <div className="resort-cards">
                {resortss.map((item,key)=>(
                    <li key={key} className="hotel-card" >
                        <img src={item.img} className="hotel-card-image" alt="f"/>
                        <div className="hotel-matter">
                        <h2 className="hotel-card-head">{item.name}</h2>
                        <button className="hotel-card-btn" onClick={()=>handleResort(item.name,item.price)}>View</button>
                        {/* <h2 className="hotel-card-price">{item.price}</h2> */}
                        </div>
                    </li>
                ))}
                </div> 
       </div>
        </div>
        
    </div>
    
)
}
export default Hotel;