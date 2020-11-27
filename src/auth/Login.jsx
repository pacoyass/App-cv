import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../ContextApi/Authentification/Authprov'

export default function Login() {
     const {login}=useContext(AuthContext)
     const [user,setuser]=useState({})
function handleInput(e){
    setuser({
        ...user,
        [e.target.name]:e.target.value
    })
}
function sendtoAuth(){
    login(user.email,user.password)
}







    return (
       <div>
            <div className='text-center offset-4 col-md-3 '>
            <h1 className="text-secondary text-center ">Login</h1>
            <div className="form-group">
                <input onChange={handleInput} name='email' type="email" className="form-control" placeholder="email"/>
                <input onChange={handleInput} name='password' type="password" className="form-control mt-3" placeholder="password"/>
            </div>
            <button onClick={sendtoAuth} className="btn btn-outline-success btn-lg"> Login</button>
            <Link to={'/register'} className="btn btn-outline-warning btn-lg ml-2"> Sign-up</Link>
            </div>
            </div>
    )
}
