
import { faR } from "@fortawesome/free-solid-svg-icons"
import "./fcard.css"
// import { FlashCard } from "react-flashcards"
import { useState } from "react"
const farr=[
    {   
        id:1,
        front:"what is travelling?",
        back:<p>Tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services. As such, tourism is a product of modern social arrangements, beginning in western Europe in the 17th century, although it has antecedents in Classical antiquity.</p>
    },
    {
        id:2,
        front:"hey",
        back:"chinnu"
    },
    {
        id:3,
        front:"hey",
        back:"mamms"
    }
]
function Fcard(){
const [selectid,setSelectid] = useState("")
return (
    <div className="fcards">
        {farr.map(farr=> <div key={farr.id}><p>{farr.id === selectid ?farr.back : farr.front}</p></div>)}
        
    </div>
)

//   function handleClick(id){
//     setSelectid(id);
//     console.log(id)
//   }

//     return (
//         <div className="fcards">
            
//             {farr.map((item)=>{
//                 return(
                    
//                 <ul key={item.id} onClick={()=>handleClick(item.id)} className={item.id === selectid ? "selected" : " "}>
//                 <div className="fcard">
//                 <FlashCard  
                
//                 front={item.front} 
//                  back={item.back}  
//                 width="450px" />
//                 </div>
              
//                 </ul>
               
//                 )
//             })}
             
//             </div>
       
//     )
}

export default Fcard;