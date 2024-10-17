import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import "./home.css"

 function Home(props){   
    console.log(props)
    return (
        <div className="homepage">
            
            <Navbar />
            <div className="im">
                
                <div style={{backgroundColor:"red"}} className="item">item</div>
                <div style={{backgroundColor:"purple"}} className="item">item</div>
                <div style={{backgroundColor:"blue"}} className="item">item</div>
                <div style={{backgroundColor:"green"}} className="item">item</div>
                <div style={{backgroundColor:"yellow"}} className="item">item</div>
                <div style={{backgroundColor:"grey"}} className="item">item</div>
                <div style={{backgroundColor:"red"}} className="item">item</div>
                <div style={{backgroundColor:"yellow"}} className="item">item</div>
              
                
            </div>            
            <button className="prevb" >prev</button>
            <button className="prevn">next</button>
            <About />
        </div>
    )
}
export default Home;