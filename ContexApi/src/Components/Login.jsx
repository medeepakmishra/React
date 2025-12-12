import React, {useState, useContext}from 'react'
import UserContext from '../contex/UserContex'


function Login() {
    const[Username,setUsernmae]= useState("");
    const [ Password,setPassword] = useState("");
    const{setUser}= useContext(UserContext)


    const handleSubmit = (e)=>{
        e.preventDefalut()
        setUser({Username,Password})

    }
  return (

    <div>

        <h2>Login</h2>
        <input type="text" placeholder='Username' value={Username} onChange={(e)=> setUsernmae(e.target.value)}/>
        {" "}
        <input type="text" placeholder='Password' name="" id="" value={Password} onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login