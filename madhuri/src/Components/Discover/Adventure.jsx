import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adventure() {
    const arr = [
        {
            imga: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721125638/pv5_qlmquw.jpg",
            title: "Motorcycle Touring",
            from: "Shimla To Leh",
            dur: "x",
            price: "x",
            key: 1
        },
        {
            imga: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1718900609/joel-vodell-8Ogfqvw15Rg-unsplash_vtivsv.jpg",
            title: "Skydiving",
            from: "Mysore",
            dur: "x",
            price: "x",
            key: 2
        },
        {
            imga: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1718900609/joel-vodell-8Ogfqvw15Rg-unsplash_vtivsv.jpg",
            title: "Hot Air Balloon",
            from: "Jaipur",
            dur: "x",
            price: "x",
            key: 3
        },
        {
            imga: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721125638/pv5_qlmquw.jpg",
            title: "Kayaking",
            from: "Agauda",
            dur: "x",
            price: "x",
            key: 4
        },
        {
            imga: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1718900609/joel-vodell-8Ogfqvw15Rg-unsplash_vtivsv.jpg",
            title: "Camel Safari",
            from: "Jaisalmer",
            dur: "x",
            price: "x",
            key: 5
        },
        {
            imga: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1718900609/joel-vodell-8Ogfqvw15Rg-unsplash_vtivsv.jpg",
            title: "Scuba Diving",
            from: "Malvan",
            dur: "x",
            price: "x",
            key: 6
        },
        {
            imga: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1721125638/pv5_qlmquw.jpg",
            title: "Jim Corbett Safari",
            from: "Ramnagar",
            dur: "x",
            price: "x",
            key: 7
        },
        {
            imga: "https://res.cloudinary.com/dyxhiuuxa/image/upload/v1718900609/joel-vodell-8Ogfqvw15Rg-unsplash_vtivsv.jpg",
            title: "Cycling",
            from: "Munnar",
            dur: "x",
            price: "x",
            key: 8
        },
    ];

    const navigate = useNavigate();

    // State to manage the color of heart symbols for each card
  
    let count = 0
    const [heartColors, setHeartColors] = useState(Array(arr.length).fill("white"));

    const handleColorChange = (index) => {
        const updatedColors = [...heartColors]; // Create a copy of the current state array
        updatedColors[index] = updatedColors[index] === "white" ? "red" : "white"; // Toggle the color
        setHeartColors(updatedColors); // Update the state with the new array
        updatedColors[index]=== "red" ? count++: count--;
        console.log(count)
        
    };
  
    const handleAdv = (title, imga, from, price, dur) => {
        navigate("/book", { state: { title, imga, from, dur, price } });
    };

    return (
        <div>
            <h1>Adventures!...</h1>
            <div className="mainadv">
                <div className="adv-head">
                    <h1>Say yes to adventures!</h1>
                </div>
                <div className="adv-cards">
                    {arr.map((item, index) => (
                        <div className="adv-card" key={item.key}>
                            <div className="bi">
                                <img src={item.imga} alt="d" />
                                <button className="wish" onClick={() => handleColorChange(index)}>
                                    <i style={{ color: heartColors[index] }} className="fa-solid fa-heart"></i>
                                </button>
                            </div>
                            <h2>{item.title}</h2>
                            <h2>{item.from}</h2>
                            <h2>{item.dur}</h2>
                            <h2>{item.price}</h2>
                            <button
                                className="adv-btn"
                                onClick={() => handleAdv(item.title, item.imga, item.from, item.dur, item.price)}
                            >
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Adventure;
