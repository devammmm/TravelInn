import { useState } from "react"
import "./discoverpage.css"
import { useLocation, useNavigate } from "react-router-dom"
// import state from "sweetalert/typings/modules/state"

function Discoverpage(){
    const discnav=[
        {name:"Home",
            url:"/",
        },
        {name:"Discover",
            url:"/discoverpage",
        },{name:"Holiday Deals",
            url:"/",
        },{name:"Contact",
            url:"/contact",
        },{name:"Logout",
            url:"/",
        }
    ]
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
                     {discnav.map((item,key)=>(
                        <li key={key}>
                            <a href={item.url}><h3>{item.name}</h3></a>
                        </li>
                     ))}
                  </div>
              </div>
              <div className="discoverpage-main">
                <img className="discoverpage-main-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721986117/dd_dsqgqg.png" alt="ii" />
                <h1 className="discoverpage-main-head">Join Us on a World-Ranging Journey</h1>
                <p className="discoverpage-main-para">Embark on a Journey of Discovery with Us. Explore the world’s hidden gems and uncover unforgettable experiences that await around every corner.</p>
                <button className="discoverpage-main-btn"><b>Discover</b></button>             
              </div>
              <Icons />
        </div>
    )
}

function Icons(){
    const icon=[
        {
            name:"Attractions",
            click:"fa-solid fa-hotel"
        },
        {
            name:"Hotels",
            click:"fa-solid fa-hotel",
        },{
            name:"Adventures",
            click:"fa-solid fa-hotel",
        },
        {name:"Temples",
            click:"fa-solid fa-hotel",
        },
        {name:"Stores",
            click:"fa-solid fa-hotel",
        }
    ]
    return(
        <div>
            <div className="icon-page">
                <div className="icons">
                {icon.map((item,key)=>(
                   <li className="icon" key={key}>
                        <button className="icon-btn">
                            <div className="icons-size"><i  class={item.click}></i></div></button>
                     <a href=""><h3 className="icon-head">{item.name}</h3></a>
                     </li>
                ))}
                </div>
                
            </div>
            <Global />
        </div>
    )
}

function Global(){
    const dest=[
        {name:"Chateau de versailles",
         img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721991653/global1_zcrtrg.jpg"   ,
         price:"12445"
        },
        {name:"Buckimgam Palace",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722409605/global2_xiz6ce.jpg"   ,
            price:"19000"
           },
           {name:"The Colosseum, Rome",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722409605/global3_kzcjy9.jpg" ,
            price:"19999"
           },{name:"Borobudur",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722409608/global4_qisgkv.jpg"   ,
            price:"23330"
           },{name:"Petra, Jordan",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722409603/global5_kh8bav.jpg"   ,
            price:"18567"
           },{name:"Prague Castle",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722409605/global6_hjt8uq.webp"   ,
            price:"33000"
           },{name:"StoneChange, England",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722409604/global7_cq4pgp.jpg"   ,
            price:"28999"
           },{name:"Pyramid of Giza",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722409601/global8_y507yb.jpg"   ,
            price:"29799"
           },
    ]
    const navigate = useNavigate();
    const handleGlobal=(Name,price)=>{
      navigate("/booknowtrip",{state:{Name,price}})   
    }
    return(
        <div>
            <h1 className="globalh">Iconic Global Destinations</h1>
            <div className="global-main-page">
                <div className="global-main-images">
                    {dest.map((item,key)=>(
                      <li key={key} className="global-card">
                        <img className="global-image" src={item.img} alt="d" />
                        <div className="btn-img">
                        <h2 className="global-image-head">{item.name}</h2>
                        <button onClick={()=> handleGlobal(item.name,item.price)} className="global-image-btn"><b>View</b></button>
                        </div>
                      </li>
                    ))}
                </div>
            </div>
            <Culturals />
        </div>
    )
}

function Culturals(){
    const cultcard=[
        {name:"Varnasi",
            id:1,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722227679/cd1_s7inmt.webp",
         mat:"Varanasi, one of the oldest cities in the world, is a spiritual epicenter on the banks of the Ganges River, renowned for its ghats and vibrant cultural heritage."   
        },
        {name:"qwerty",
            id:2,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722227679/cd1_s7inmt.webp",
            mat:"Varanasi, one of the oldest cities in the world, is a spiritual epicenter on the banks of the Ganges River, renowned for its ghats and vibrant cultural heritage."   
           },
           {name:"Varnasi",
            id:3,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722227679/cd1_s7inmt.webp",
            mat:"Varanasi, one of the oldest cities in the world, is a spiritual epicenter on the banks of the Ganges River, renowned for its ghats and vibrant cultural heritage."   
           },
           {name:"Varnasi",
            id:4,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722227679/cd1_s7inmt.webp",
            mat:"Varanasi, one of the oldest cities in the world, is a spiritual epicenter on the banks of the Ganges River, renowned for its ghats and vibrant cultural heritage."   
           },
           {name:"Varnasi",
            id:5,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722227679/cd1_s7inmt.webp",
            mat:"Varanasi, one of the oldest cities in the world, is a spiritual epicenter on the banks of the Ganges River, renowned for its ghats and vibrant cultural heritage."   
           },
           {name:"Varnasi",
            id:6,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722227679/cd1_s7inmt.webp",
            mat:"Varanasi, one of the oldest cities in the world, is a spiritual epicenter on the banks of the Ganges River, renowned for its ghats and vibrant cultural heritage."   
           },
           {name:"Varnasi",
            id:7,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722227679/cd1_s7inmt.webp",
            mat:"Varanasi, one of the oldest cities in the world, is a spiritual epicenter on the banks of the Ganges River, renowned for its ghats and vibrant cultural heritage."   
           },
           {name:"Varnasi",
            id:8,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722227679/cd1_s7inmt.webp",
            mat:"Varanasi, one of the oldest cities in the world, is a spiritual epicenter on the banks of the Ganges River, renowned for its ghats and vibrant cultural heritage."   
           },
           {name:"Varnasi",
            id:9,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722227679/cd1_s7inmt.webp",
            mat:"Varanasi, one of the oldest cities in the world, is a spiritual epicenter on the banks of the Ganges River, renowned for its ghats and vibrant cultural heritage."   
           },
    ]
    const handleView = (id) => {
        setView((prevView) => ({
          ...prevView,
          [id]: !prevView[id]
        }));
      };
    const handleviewbtn =()=>{

    }
    const [explore,setExplore] = useState(false)
    const handleExplore=()=>{
           setExplore(!explore);
    }
    const topvisit=[
        {name:"Marrakesh, Morroco",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722233098/top1_swcjmd.jpg",

            price:"15422"

        },
        {name:"Cartagena, Columbia",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722417342/top2_szrve5.avif",
            price:"25468"
        }
        ,{name:"Masai Mara, Kenya",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722417340/top3_ghm1ay.jpg",
            price:"16542"
        },
        {name:"Mawi, Hawai",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722417338/top4_grg3xu.webp",
            price:"20895"
        },
        {name:"Montreal, Canada",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722417337/top5_n6fhu9.webp",
            price:"19546"
        },
        {name:"Manhattan, New York",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722417335/top6_kk1rty.avif",
            price:"23778"
        },
        {name:"Tbilisi, Georgia",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722417335/top7_hjg81g.jpg",
            price:"29856"
        },{name:"Svalbard, Norway",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722417333/top8_mqivex.jpg",
            price:"33025"
        }
        ,{name:"Rio de janeiro",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722417333/top9_vqr30u.jpg",
            price:"28965"
        },
        {name:"Puebla, Mexico",
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722417332/top10_x2jqal.jpg",
            price:"34895"
        }
    ]
    const [view,setView] = useState(false)
    const navigate = useNavigate();
    const handleImage=(Name,price)=>{
        navigate("/booknowtrip",{state:{Name,price}})
    }
    return(
        <div>
            <div className="culture-main-page">
                <img className="cult-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721996821/mmm_mh6fky.png" alt="d"/>
                <img className="cultural-main-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721994626/cultures_k5q0am.png" alt="oo"/>
                <h1 className="cultural-head">"Cultural Riches Around the World"</h1>
                <p className="cultural-para">Cultural tours immerse travelers in the traditions, art, and heritage of diverse regions, offering an authentic glimpse into local customs and historical landmarks. </p>
                <button className="cult-btn" onClick={handleExplore}><b>Explore</b></button>
            </div>
            {explore &&(
                  <div className="cultural-cards">
                  {cultcard.map((item) => (
                    <li className="cult-card" key={item.id}>
                      <img className="cult-card-image" src={item.img} alt="k" />
                      <div className="card-head-mat">
                        <h2 className="cult-card-head">{item.name}</h2>
                        <button className="view-cult-btn" onClick={() => handleView(item.id)}>
                          {view[item.id] ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                        </button>
                      </div>
                      {view[item.id] && (
                        <div>
                          <p className="cult-card-mat">{item.mat}</p>
                          <button className="view-btn" onClick={handleviewbtn}>View</button>
                        </div>
                      )}
                    </li>
                  ))}
                </div>
            )}
           
            <div className="top-visit">
                <h1 className="top-visit-head">Top 10 Must-Visit Destinations Around the Globe</h1>
                <div className="top-cards">
                    {topvisit.map((item,key)=>(
                        <li className="top-card" key={key}>
                            <img onClick={()=>handleImage(item.name,item.price)} className="top-card-image" src={item.img} alt="o"/>
                           <h2 className="top-card-head">{item.name}</h2>
                        </li>
                    ))}
                </div>
            </div>

        </div>
    )
}



export default Discoverpage;