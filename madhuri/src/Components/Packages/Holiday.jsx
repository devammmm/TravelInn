import { useState } from "react"
import "./holiday.css"
import { useNavigate } from "react-router-dom"
function Holiday() {
    const nav=[
        {name:"Home",
            url:"/"
        },
        {name:"Family Deals",
            url:"/"
        },
        {name:"Login",
            url:"/Login"
        },{
            name:"Signup",
            url:"/"
        }
    ]
// const hol=[
//     {
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },
//     {
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },
//     {
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },{
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },{
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },{
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },{
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },{
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },{
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },{
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },{
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },{
//         name:"holiday package",
//         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721736876/holidacard_b88vs4.jpg",
//         price:"Rs.439"
//     },
// ]
    return (
        <div>
            <div className="holiday-main-page">
            <div className="nav-holi"> <a className="home-holi" href="/">Home</a>
                        <a className="fam-holi" href="/family">Family Deals</a>
                        <a className="login-holi" href="/Login">Login</a>
                        <a className="sign-holi" href="/signup">Signup</a></div>    
            <img className="holiday-main-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721994626/ll_ck3wre.png" alt="kk"/>

            <div className="holiday-main">
                                
                <div className="holiday-matter">
                    <h1 className="holi-main-h">HOLIDAY<br /> TOUR</h1>
                    <p className="holi-main-p"> Surprised to see this hippie’s paradise on this list? Well, you’re not alone in feeling that. With the kind of perception that Goa has formed over the past years, not many see this beach paradise as one of the best family holiday destinations in India whereas </p>
                    <button className="holi-main-btn"><b>See More</b></button>
                </div>
                <div>
                    <img className="holiday-pack-img" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721917750/holii_avsp6r.png" alt="dww" />
                </div>
            </div>
            {/* <div className="scroll-text">
                <img className="disc-img" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721733673/discount_qfflmi.png" alt="edj" />
                <h2 className="disc-h">flat 30% on Holiday Packages</h2>
            </div> */}
            {/* <div className="holiday-cards">
                 {hol.map((item)=>(
                    <div className="holiday-card">
                        <img className="holiday-card-img" src={item.img} alt="fjoei" />
                        <h2>{item.name}</h2>
                        <div className="holi-mat">
                        <h2>{item.price}</h2>
                        <button className="holi-card-btn">Bok Now</button>
                        </div>
                       
                    </div>
                 ))}
            </div> */}
</div>
<Indiadeals />

        </div>
    )
}
function Indiadeals(){
    const ind=[
        {name:"Taj Mahal",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721968893/tajmahal_gidlnz.jpg",
         cou:"India",
         price:"7899"   
        },
        {name:"Golden Temple",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722510359/hol2_cz7n0j.webp",
            cou:"India",
            price:"12858"   
           },
           {name:"Konark Sun Temple",
            cou:"India",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722510358/hol3_gu4qqm.jpg",

            price:"14750"   
           },
           {name:"Nalanda",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722510359/hol4_ouoguz.jpg",
            cou:"India",
            price:"11100"   
           },
           {name:"Khajuraho Temple",
            cou:"India",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722510359/hol5_y9466d.jpg",
            price:"18200"   
           },
           {name:"Gomateshwara",
            cou:"India",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722510357/hol6_tcbbjb.jpg",
            price:"8999"   
           },
           {name:"Hampi",
            cou:"India",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722510356/hol7_cafqej.jpg",
            price:"10999"   
           },
           
    ]
const [viewindia,setViewindia] = useState(false)
const handleviewindia=()=>{
    setViewindia(!viewindia);
}
const navigate = useNavigate();
const handleWonders=(Name,price)=>{
    navigate("/booknowtrip",{state:{Name,price}})
}
    return (
        <div>
            
            <div className="india-page">
           
                <img className="india-page-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721966841/india_cdzlas.png" alt="jj"/>
                <h1 className="india-page-head">Discover the Wonders of India</h1>
                <button onClick={handleviewindia} className="india-page-btn"><b>Explore India</b></button>
            </div>
            {viewindia && (
                <div>
                
                <div className="india-cards">
                <h2 className="ind-head">Explore India</h2>
                {ind.map((item,key)=>(
                    <div className="india-card">
                        <li key={key}>
                            <div className="indim">
                        <img className="india-card-image" src={item.img} alt="jj"/>
                        </div>
                        <div className="india-card-matter">
                        <h3>{item.name}</h3>
                        <button onClick={()=>handleWonders(item.name,item.price)} className="india-wonders-btn"><i class="fa-solid fa-arrow-right"></i></button>
                        {/* <h4>{item.cou}</h4>
                        <h4>{item.price}</h4> */}
                        </div>
                        </li>
                    </div>
                ))}
            </div>
            </div>
            )}
            <Monuments />
        </div>
    )
}
function Monuments(){
    const [monu,setMonu] = useState(false)
    const [monuone,setMonuone] = useState(false)
    const [monutwo,setMonutwo] = useState(false)
    const [monuthree,setMonuthree] = useState(false)



    const handleicon=()=>{
         setMonu(!monu);
         setMonuone(false)
         setMonutwo(false)
         setMonuthree(false)
            }
    const handleiconone =()=>{
        setMonuone(!monuone);
        setMonu(false)
        setMonutwo(false)
         setMonuthree(false)
    }
    const handleicontwo=()=>{
        setMonutwo(!monutwo)
        setMonuthree(false)
        setMonu(false)
        setMonuone(false);

        
    }
    const handleiconthree=()=>{
        setMonuthree(!monuthree)
        setMonu(false)
        setMonuone(false);
        setMonutwo(false)
        
    }
    // const mo=[
    //     {name:"Hawa Mahal",
    //         price:"12400"
    //     },
    //     {name:"Chatrapathi Shivaji Termison",
    //         price:"8000"
    //     },
    //     {name:"Qutub Minar",
    //         price:"15499"
    //     },
    //     {name:"Amaravathi Stupa",
    //         price:"12199"
    //     },
        
    // ]
    return(
        <div>
            <div className="monument-page">
                <h1 className="monnument-page-head">Have a look at these great monuments in new delhi</h1>
                <div className="flex">
                <img className="monument-main-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722235445/map_av1sa1.png" alt="o"/>
                <div className="icon-loc">
                    <i onClick={handleicon}  class="fa-solid fa-location-dot"></i>
                    <div className="onhoverimgs">
                    <img className="loc-hover-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722236006/Rawa_dkiiin.jpg" alt="i"/>
                    </div>
                </div>
                {monu && (
                    <div className="monu-card">
                        <img className="selectimage" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722236006/Rawa_dkiiin.jpg" alt="r"/>
                        <div className="monu-card-mat">
                        <h2>Hawa Mahal</h2>
                        <button className="monu-card-btn">view</button>
                        </div>
                        </div>
                )}
                <div className="icon-loc1">
                    <i onClick={handleiconone}  class="fa-solid fa-location-dot"></i>
                    <div className="onhoverimgs">
                    <img className="loc-hover-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722246177/terminus_pckfje.avif" alt="i"/>
                    </div>
                </div>
                {monuone && (
                    <div className="monu-card">
                        <img className="selectimage" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722246177/terminus_pckfje.avif" alt="r"/>
                        <div className="monu-card-mat">
                        <h2>Chatrapathi Shivaji Termison</h2>
                        <button className="monu-card-btn1">view</button>
                        </div>
                        </div>
                )}
                <div className="icon-loc2">
                    <i onClick={handleicontwo}  class="fa-solid fa-location-dot"></i>
                    <div className="onhoverimgs">
                    <img className="loc-hover-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722245101/qutub_fiecyr.jpg" alt="i"/>
                    </div>
                </div>
                {monutwo && (
                    <div className="monu-card">
                        <img className="selectimage" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722245101/qutub_fiecyr.jpg" alt="r"/>
                        <div className="monu-card-mat">
                        <h2>Qutub Minar</h2>
                        <button className="monu-card-btn2">view</button>
                        </div>
                        </div>
                )}
                <div className="icon-loc3">
                    <i onClick={handleiconthree}  class="fa-solid fa-location-dot"></i>
                    <div className="onhoverimgs">
                    <img className="loc-hover-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722247121/amaravathi_stupa_cady2n.jpg" alt="i"/>
                    </div>
                </div>
                {monuthree && (
                    <div className="monu-card">
                        <img className="selectimage" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722247121/amaravathi_stupa_cady2n.jpg" alt="r"/>
                        <div className="monu-card-mat">
                        <h2>Amaravathi Stupa</h2>
                        <button className="monu-card-btn3">view</button>
                        </div>
                        </div>
                )}
                </div>
                
                
            </div>
        </div>
    )
}

export default Holiday;