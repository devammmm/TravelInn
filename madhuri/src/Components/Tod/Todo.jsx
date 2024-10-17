import { useState } from "react"
import "./tod.css"
const trips=[
    {
      name:"pack1",state:"ap",selected:false
    },
    {
        name:"pack2",state:"tn",selected:true
    },
    {
        name:"pack3",state:"tn",selected:true
    }
]
function Todo(){
    return (
        <div >
        <Logo />
        <Form />
        <List />
        <Stats />
        </div>
    )
}
function  Logo(){
    return (
        <div className="logo"><h1>Make Your Own Trip🧳</h1></div>
    )
}
function Form(){
    const [description,setDescription] = useState("");
    const [quantity,setQuantity] =useState("")

    function handlesubmit(e){
       e.preventDefault();
       if (!description) return;
       const newitem = {description,quantity,id: Date.now(),selected:false}
       console.log(newitem)
       console.log(e)

    }
    return (
        <div  className="form">
            <form onSubmit={handlesubmit}>
           Add your trips 
           <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
            {Array.from({length:10},(_,i)=>i +1).map(num=><option value={num} key={num}>{num}</option>)}
           </select>
           <input type="text" placeholder="add......" value={description} onChange={(e)=>{ setDescription(e.target.value)}} />
           <button>Add</button>
             </form>
    </div>
    )
}
function List(){
    return (
        <div className="lists">
    <ul >
        {trips.map((item)=>(
             <Item item ={item} key={item.state}/>
        ))}
       
    </ul>
    </div>
    )
}
function Item({item}){
   return (
  
   <>
    <span style={item.selected ? {textDecoration:"line-through"} : {}}> {item.name}</span>
    <button>&times;</button>
    {/* <h4>Select Package</h4> */}
    {/* <select>
        <option value={3}>1</option>
    </select> */}
    
    </>
    
   )
}
function Stats(){
    return (
    <div className="stats">
       <h3>You have x places to visit, and yu have already visited y places.       </h3>
        <h4>Hope you visit them soon!</h4>

    </div>
    )
}

export default Todo;