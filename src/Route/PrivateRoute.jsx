import React, { Component, useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../ContextApi/Authentification/Authprov'

export default function PrivateRoute({compononet:Compononet,...rest}) {
    const {isLogin}=useContext(AuthContext)
    return (
        <div>
            <Route 
            {...rest}
             render={props=>{
                 if(isLogin==null)
                 return <Redirect to='/login'/>
                 else
                 return <Component {...props}/>
             }}
            
            
            
            
            
            />
        </div>
    )
}
