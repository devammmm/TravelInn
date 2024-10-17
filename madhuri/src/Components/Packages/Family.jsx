import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./family.css"

function Family() {
    const famnav = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Discover",
            link: "/discoverpage"
        },
        {
            name: "Holiday Homes",
            link: "/holidaypackage"
        },
        {
            name: "Logout",
            link: "/"
        },
    ]
    return (
        <div>
            <div className="family-navbar">
            <div className="navlogo">
            <img className="logo" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722872594/logo_mzv7ly.png" alt="o"/>
            <h2>TravelInn</h2>
            </div>
                <div className="fam-nav-links">
                    {famnav.map((item) => (
                        <a href={item.link}><h3>{item.name}</h3></a>
                    ))}
                </div>
            </div>
            <div className="family-page">
                <img className="family-page-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721902332/famm_m1uuvg.png" alt="d" />
                <div className="family-page-matter">
                    <h1 className="family-page-head">Adventure awaits, with family by your side</h1>
                    <p className="family-page-para">Discover unforgettable family adventures with our all-inclusive travel package. Enjoy luxury accommodations, exciting activities, and special amenities tailored for all ages. Create lasting memories with your loved ones today!</p>
                    <button className="family-page-btn"><h3>Join Us</h3></button>
                </div>
            </div>
            <FamilyActivities />
            <Resorts />
        </div>
    )
}

function FamilyActivities() {
    const carddet = [
        {
            id: 1,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722508236/fam1_aueaew.jpg",
            name: "Ladakh",
            price: "15499",
            dur: " 4 to 8 hours"
        },
        {
            id: 1,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722508234/fam2_f2gqq1.jpg",
            name: "Allepey",
            price: "11455",
            dur: " 4 to 8 hours"
        },
        {
            id: 1,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722508234/fam3_jrbvmo.webp",
            name: "Nainital",
            price: "19678",
            dur: " 4 to 8 hours"
        },
        {
            id: 1,
            img:"https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722508233/fam4_rmhpdv.jpg",
            name: "Srinagar",
            price: "12334",
            dur: " 4 to 8 hours"
        },
    ]
    const navigate = useNavigate();
    const handlefamilyact=(Name,price)=>{
        navigate("/booknowtrip",{state:{Name,price}})
    }
    return (
        <div className="fam-act-page">
            <h1 className="fam-act-head">Family Friendly Activities</h1>
            <ul className="fam-act-cards">

                {carddet.map((item, key) => (
                    <div className="fam-card">
                        <li key={key.id}>
                            <img className="fam-card-image" src={item.img} alt="u" />
                            <h3 className="fam-card-place">{item.name}</h3>
                            {/* <h3>{item.dur}</h3>
                            <h3>{item.price}</h3> */}
                            <button onClick={()=>handlefamilyact(item.name,item.price)} className="fam-act-card-btn"><b>Book</b></button>
                        </li>
                    </div>
                ))}
            </ul>
            <Tips />
            <Coupletravel />
        </div>
    )
}

function Tips() {
    const trtips = [
        { tip: "Traveling with kids can be challenging at times. Stay patient and positive to keep the trip enjoyable for everyone." },
        { tip: "Take lots of photos and create lasting memories together." },
        { tip: "Stick to a budget to avoid overspending. " },
        { tip: " Pack light but don't forget essentials like snacks, medications, and entertainment for kids." },
        { tip: "Research destinations and accommodations that cater to families." },

    ]
    return (
        <div className="Tips">
            <div className="tip-card">
                <img className="tip-card-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721906352/tips_oalbfw.png" alt="o" />
                <div className="trav">
                    <h2 className="tip-card-head">Travel Tips</h2>
                    <div className="trav-tips">

                        {trtips.map((item) => (
                            <h3 className="tips-head">{item.tip}</h3>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
function Coupletravel() {
    const couple = [
        {
            place: "Maldives",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722507015/hm1_ruxcqy.webp",
            price: "16999"
        },
        {
            place: "Mauritius",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722507015/hm2_o5a5dz.jpg",
            price: "15469"
        },
        {
            place: "Sri Lanka",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722507015/hm3_vwb5bz.webp",
            price: "20456"
        },
        {
            place: "Cradle Mountain",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722507014/hm4_sjsqui.jpg",
            price: "18699"
        },
        {
            place: "Langkawi",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722507013/hm5_x1jegl.jpg",
            price: "21699"
        }, {
            place: "Gold Coast",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722507015/hm6_zlc427.jpg",
            price: "22699"
        }, {
            place: "Santorini",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722507014/hm7_mkjvgv.jpg",
            price: "18999"
        }, {
            place: "Tuscany",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722507014/hm8_yuia2o.jpg",
            price: "28457"
        }, {
            place: "Munnar",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722507015/hm9_efter8.jpg",
            price: "20156"
        }
    ]
    const [click, setClick] = useState(false)
    const handlecouplepack = () => {
        setClick(!click);
    }
    const navigate = useNavigate();
    const handleCouplecard=(Name,price)=>{
        navigate("/booknowtrip",{state:{Name,price}})
    }
    return (
        <>
            <div>
                <div className="couple-main-page">
                    <img className="couple-main-image" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722099711/loveinair_mwiz06.png" alt="o" />
                    <img className="love" src="https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722099043/lovee_gu4qkn.png" alt="l" />
                    <h1 className="couple-main-head">Love is in the Air: Travel with Your Loved One</h1>
                    <button onClick={handlecouplepack} className="couple-main-btn"><b>View More</b></button>
                    {click && (
                        <div className="couple-card-main-page">
                            <div className="couple-packages">
                                <h2 className="couple-packages-head">
                                    Begin Your Forever: Exclusive Honeymoon Getaways </h2>
                            </div>
                            <div className="couple-cards">
                                {couple.map((item, key) => (
                                    <li key={key} className="couple-card">
                                        <img className="couple-card-image" src={item.img} alt="t" />
                                        <div className="coup-card-mat">
                                            <h2 className="couple-card-head">{item.place}</h2>
                                            <button  onClick={()=>handleCouplecard(item.place,item.price)} className="couple-card-btn"><b>Book Now</b></button>
                                        </div>
                                    </li>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            

        </>
    )
}

function Andaman() {
    const anda = [
        {
            name: "",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722103548/andaman_qr2b9a.jpg",
            price: ""
        },
        {
            name: "",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722103548/andaman_qr2b9a.jpg",
            price: ""
        },
        {
            name: "",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722103548/andaman_qr2b9a.jpg",
            price: ""
        },
        {
            name: "",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722103548/andaman_qr2b9a.jpg",
            price: ""
        },
        {
            name: "",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722103548/andaman_qr2b9a.jpg",
            price: ""
        },
        {
            name: "",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722103548/andaman_qr2b9a.jpg",
            price: ""
        },
        {
            name: "",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722103548/andaman_qr2b9a.jpg",
            price: ""
        },
        {
            name: "",
            img: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1722103548/andaman_qr2b9a.jpg",
            price: ""
        },
    ]
    return (
        <div>
            <div className="andpac">
                <h2 className="and-head">Best Selling Andaman Tour Packages</h2>
                <div className="andaman-cards">
                    {anda.map((item, key) => (
                        <li className="andaman-card" key={key} >
                            <img className="andaman-image" src={item.img} alt="o" />
                            <h2>{item.name}</h2>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Resorts() {
    return (
        <div> </div>
    )
}

export default Family;