import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Login from "./Components/Login/Login"
import Forgetpassword from "./Components/Login/Forgetpassword";
import Signup from "./Components/Login/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lad from "./Components/Lad/Lad";
import Discover from "./Components/Discover/Discover";
import Bookstatus from "./Components/Discover/Bookstatus"
import { AppProvider } from "./Components/AppContext";
import { createContext, useState } from "react";
import Favourites from "./Components/Navbar/Favourites";
import Family from "./Components/Packages/Family";
import Famcard from "./Components/Packages/Famcard"
import Holiday from "./Components/Packages/Holiday";
import Land from "./Components/Lad/land";
import Aboutl from "./Components/Lad/Aboutl";
import Contactl from "./Components/Lad/Contactl";
import Discoverpage from "./Components/Discoverpage/Discoverpage";
import Hotel from "./Components/Hotels/Hotel";
import Adventures from "./Components/Adventures/Adventures";
import Booknow from "./Components/Booknow/Booknow";
export  const store = createContext();
function App() {
  const [isBooked, setIsBooked] = useState(false);
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/forgetpassword" element={<Forgetpassword />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/" element={<Land />}/>
      <Route path="/al" element={<Navbar />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/discover" element={<Discover />}/>
      <Route path="/book" element={<Bookstatus />}/>
      <Route path="/wishlist" element={<Favourites />}/>
      <Route path="/family" element={<Family />}/>
      <Route path="/fampackage" element={<Famcard />}/>
      <Route path="/holidaypackage" element={<Holiday/>}/>
      <Route path="/aboutl" element={<Aboutl />}/>
      <Route path="/contactl" element={<Contactl />}/>
      <Route path="/discoverpage" element={<Discoverpage />}/>
      <Route path="/hotels" element={<Hotel />}/>
      <Route path="/adventures" element={<Adventures />}/>
      <Route path="/booknowtrip" element={<Booknow />}/>
     </Routes>
    </BrowserRouter> 
  );
}
export default App;
