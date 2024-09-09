import React,{useState} from 'react'

export default function form() {
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")

    const handleName=(event:any)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }
  return (
    <div>
    <input  placeholder='enter user name' type="text" onChange={handleName} />    
    <input  placeholder='enter your Number' type="text" />    
    <div>
        <h5>User Details</h5>
        <p>Name:{name}</p>
    </div>
    </div>
  )
}