import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { NavLink, useNavigate } from "react-router-dom"

// styles
import "./login.css"

// Assets
import logo from "../../Assets/logo.jpg"

const Login=()=>{
    const [credentials,setCredentials]=useState({
        username : "xyz",
        password : "xyz",
    })

    const {loading,error,dispatch}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleChange=(e)=>{
        setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
    }
    const handleClick=async (e)=>{
        e.preventDefault() 
        dispatch({type:"LOGIN_START"})
        try{
            console.log(credentials);
            const res=await axios.post("https://api-uqjw.onrender.com/api/auth/login",credentials)
            dispatch({type:"LOGIN_SUCCESS",payload: res.data.details})
            console.log(res);
            navigate("/")

        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
        }
    }
    
    return(
        <div className="login">
            
            <div className="lContainer">
            <h1>WELCOME</h1>
                
                <img className="logol" src={logo} alt="" />
                
                <input type="text" className="lInput" placeholder="username" id="username" onChange={handleChange} />
                <input type="password" className="lInput" placeholder="password" id="password" onChange={handleChange} />
                <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
                <span className="shr">
                <NavLink
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span className="sh1"> New User ?Register..</span>
            </NavLink>
            <br />
            <br />
            <NavLink
              to="/forgot"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span className="sh1">Forgot Password..</span>
            </NavLink>
                </span>

                {error && <span className="message">{error.message}....</span>}
            </div>
        </div>
    )
}
export default Login