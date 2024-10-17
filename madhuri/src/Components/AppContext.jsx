import { Children, createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { ToastContainer ,toast} from "react-toastify";
export const AppContext = createContext()
export const useAppcontext = ()=>useContext(AppContext)
export const AppProvider = ({children})=>{
   
    const handleNotify=()=>{
        toast.success("Trip Booked Successfully!")
    }

    const [name,setData] = useState()
    const handleData = (data)=>{
        setData(data)
    }
    
    return(
       <AppProvider values={{name,handleData}}>
        {children}
       </AppProvider>
    )
}