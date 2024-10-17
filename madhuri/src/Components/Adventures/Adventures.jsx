import { useActionData, useNavigate } from "react-router-dom"
import  "./adventure.css"
import { useState } from "react"
import { faL } from "@fortawesome/free-solid-svg-icons"

function Adventures(){
    const advnav=[
        {name:"Home",
            url:"/",
        },
        {name:"Discover",
            url:"/discoverpage",
        },{name:"Packages",
            url:"/",
        },{name:"Contact",
            url:"/contact",
        },{name:"Logout",
            url:"/",
        }
    ]
   
    
  
    const mountain_act=[
        {
            name:"Rock Climbing",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722252693/m1_eii2dl.jpg",
            price:"12999"
        },
        {
            name:"Hiking and Trekking",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722517601/hiking_w4cdur.jpg",
            price:"15468"
        },
        {
            name:"Mountain Biking",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722517600/biking_jauzez.jpg",
            price:"22899"
        },
        {
            name:"Via Feretta",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722517598/via_feretta_llwkws.jpg",
            price:"28799"
        },
        {
            name:"Canyoying",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722517601/canyoying_k5pgx9.avif",
            price:"24899"
        },
        {
            name:"Mountain Paragliding",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722517599/mou_para_rgj0ln.jpg",
            price:"30999"
        },
        
        
    ]
    const beach_act=[
        {
            name:"Para-Sailing",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722254125/beachimg_zmg6mp.jpg",
            price:"22999"
        },
        {
            name:"Snorkeling",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722517297/snorkeling_n9fgml.webp",
            price:"18999"
        },
        {
            name:"Jet Skiing",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722517298/jet_icnrpa.webp",
            price:"18596"
        },
        {
            name:"Scuba Driving",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722517298/great-barrier-reef-scuba-diving-1-scaled_wkxb3k.webp",
            price:"28999"
        },
        {
            name:"Kite Surfing",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722517298/kite_mrmbah.jpg",
            price:"25789"
        },
        {
            name:"Surfing",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722517297/surf_g1bovc.avif",
            price:"26458"
        },
       
    ]
    const [des,setDes] = useState(false)
    const handleDesert=()=>{
         setDes(!des);
         setMount(false);
         setBea(false);
    }
    const desert_act=[
        {
            name:"Dune Bashing",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722254572/deserrt_asv6qg.jpg",
            price:12999
        },
        {
            name:"Sand Boarding",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722518153/sandboarding_qvcqfq.jpg",
            price:"32999"
        },
        {
            name:"Camel Trekking",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722518136/camel_xsoa3q.jpg",
            price:"12889"
        },
        {
            name:"Star Gazing",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722518261/star_ptcu0d.jpg",
            price:"22599"
        },
        {
            name:"Desert Hiking",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722518445/deserthiking_atqktq.jpg",
            price:"19000"
        },
        {
            name:"Hot Air Balloning",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722518382/hotair_iynyio.jpg",
            price:"33999"
        },
        
    ]
    const [mount,setMount] = useState(false)
    const [bea,setBea] = useState(false)
    const handleMountain =()=>{
           setMount(!mount);
           setBea(false)
           setDes(false)
    }
    const handleBeach=()=>{
        // setMount(false)
        setBea(!bea)
        setMount(false)
        setDes(false)
    }
    const navigate = useNavigate();
    const handleContact=()=>{
       navigate("/contactl")
    }
    const handleadv=(Name,price)=>{
 navigate("/booknowtrip",{state:{Name,price}})
    }
return(
    <div>
        <div className="discover-navbar">
                  <div className="discover-nav-logo">
                  <div className="navlogo">
            <img className="logo" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722872594/logo_mzv7ly.png" alt="o"/>
            <h2>TravelInn</h2>
            </div>
                  </div>
                  <div className="discover-nav-links">
                     {advnav.map((item,key)=>(
                        <li key={key}>
                            <a href={item.url}><h3>{item.name}</h3></a>
                        </li>
                     ))}
                  </div>
              </div>

            <div className="adventure-page">
                <img className="adventure-page-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722248521/adventure_jvnmzz.png" alt="d"/>
                <h1 className="adventure-main-head">Adventure is worthwhile in itself.</h1>
                <p className="adventure-main-para">Adventure trips offer the thrill of exploring new landscapes, experiencing diverse cultures, and pushing one's boundaries.</p>
                <button className="adventure-main-btn"><b>View All</b></button>
                <img className="adventure-page-image-two" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722249286/air_jpq4bh.png" alt="ad"/>
                </div>  
                <div className="adv-types">
                    <div className="moun">
                    <img className="mountain-image" onClick={handleMountain} src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722251460/mountain_mmcwdl.png"  alt="j"/>
                    <h2 className="moun">Mountain Escapes</h2>
                    </div>
                    <div className="beacch">
                    <img className="beach-image" onClick={handleBeach} src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722251455/beach_sfdgif.png"  alt="j"/>
                    <h2 className="beac">Beach trills</h2>
                    </div>
                    <div className="desert">
                    <img className="desert-image" onClick={handleDesert} src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722251457/desert_jjzf4o.png"  alt="j"/>
                    <h2 className="dese">Desert Expeditions</h2>
                    </div>
                </div>
                {mount && (
                          <div className="mountain-cards">
                               {mountain_act.map((item,key)=>(
                                 <li className="mountain-card" key={key}>
                                 <img className="mount-card-image" src={item.img} alt="k"/>
                                <h2>{item.name}</h2>
                                <button className="boy" onClick={()=>handleadv(item.name,item.price)}><i class="fa-solid fa-arrow-right"></i></button>
                                 </li>
                                ))}
                           </div> 
                    )}          
                    {bea && (
                          <div className="mountain-cards">
                               {beach_act.map((item,key)=>(
                                 <li className="mountain-card" key={key}>
                                 <img className="mount-card-image" src={item.img} alt="k"/>
                                <h2>{item.name}</h2>
                                <button className="boy" onClick={()=>handleadv(item.name,item.price)}><i class="fa-solid fa-arrow-right"></i></button>

                                 </li>
                                ))}
                           </div> 
                    )}
                    {des && (
                          <div className="mountain-cards">
                               {desert_act.map((item,key)=>(
                                 <li className="mountain-card" key={key}>
                                 <img className="mount-card-image" src={item.img} alt="k"/>
                                <h2>{item.name}</h2>
                                <button className="boy" onClick={()=>handleadv(item.name,item.price)}><i class="fa-solid fa-arrow-right"></i></button>

                                 </li>
                                ))}
                           </div> 
                    )} 

                  
            <div className="queries">
                <div className="quer-mat">
                <h2>For any issues conatact us </h2>
                <button onClick={handleContact} className="query-btn"><b>Contact us</b></button>
                </div>
            </div>
    </div>
)
}
export default Adventures;