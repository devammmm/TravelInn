import "./aboutl.css"

function Aboutl(){
const abnav=[
    {name:"Home",url:"/"},
    {name:"Contact Us",url:"/contactl"},{name:"Login",url:"/Login"},{name:"Sign Up",url:"/signup"},
]
return(
    <div>
        <div className="about-nav">
            <div className="about-nav-logo">
            <div className="navlogo">
            <img className="logo" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722872594/logo_mzv7ly.png" alt="o"/>
            <h2>TravelInn</h2>
            </div>
            </div>
            <div className="about-nav-links">
            {abnav.map((item)=>(
                <a href={item.url} ><h3 className="about-nav-h">{item.name}</h3> </a>
            ))}
            </div>
        </div>
        <div className="lad-about">
            <img className="aboutus-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721881762/aa_wnxnjy.png" alt="d"/>

            <div className="aboutl-matter">
                <h1 className="aboutl-h">About Us</h1>
                <p className="aboutl-para">"At TravelInn, we're passionate about exploring the world and sharing unforgettable travel experiences. Whether you're seeking adventure, relaxation, or cultural immersion, our expertly curated guides and tips ensure every journey is seamless and inspiring."</p>
                <button className="aboutl-btn"><b>Know More</b></button>
            </div>
           
        </div>
    </div>
)


}
export default Aboutl;