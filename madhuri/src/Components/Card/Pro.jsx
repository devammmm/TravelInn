import { useState } from "react"
import "./profile.css"
const ar = [
    {ima:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827725/ybnbbiqju88tauip157l.jpg",
     title : "Taj Mahal"
    },
    {ima:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827709/hesoqdp9qjrsfcedk7fa.jpg",
        title : "Charminar"
       },
       {ima:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827709/vth6uhhwt0zejzbykcg1.jpg",
        title : "Lambasinghi"
       },
       {ima:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827725/ybnbbiqju88tauip157l.jpg",
        title : "Qutub Minar"
       },
       {ima:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827725/ybnbbiqju88tauip157l.jpg",
        title : "Taj Mahal"
       },
       {ima:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827725/ybnbbiqju88tauip157l.jpg",
        title : "Taj Mahal"
       },
       {ima:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827725/ybnbbiqju88tauip157l.jpg",
        title : "Taj Mahal"
       },
       {ima:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827708/lxrl3nnn8hf0iaedxbx4.jpg",
        title : "Kerala Backwaters"
       }
]

function Pro(){
   const  [open,setOpen] = useState(false);

      return(
        <div className="cards">
            {ar.map((item)=>{
                return(
                <div className="card">
                    <img src={item.ima}/>
                    <h2>{item.title}</h2>
                </div>
                )
            })}
        {/* <div className="card">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827725/ybnbbiqju88tauip157l.jpg"/>
            <h2>Taj Mahal</h2>
            
            
        </div> 
        
        <div className="card">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827709/hesoqdp9qjrsfcedk7fa.jpg"/>
            <h2>Charminar</h2>
          
            
        </div>
        
        <div className="card">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827709/vth6uhhwt0zejzbykcg1.jpg"/>
            <h2>Lambasingi</h2>
            
        </div>
        <div className="card">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827709/hikhajux0lpq43xglqtn.jpg"/>
            <h2>Qutub Minar</h2>
            
        </div>
        <div className="card">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827709/hgo724eihlzpmzctgdwe.jpg"/>
            <h2>Golden Temple</h2>
            
        </div>
        <div className="card">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827709/aneqy4lg2bltmcx8vwnc.jpg"/>
            <h2>Red Fort</h2>
        
        </div>
        <div className="card">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827709/tnxmeyb29g29cxogazbz.jpg"/>
            <h2>Lotus Temple</h2>
            
        </div>
        <div className="card">
            <img src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1719827708/lxrl3nnn8hf0iaedxbx4.jpg"/>
            <h2>Kerala Backwaters</h2>
            
        </div> */}
        </div>
    )
}

export default Pro;