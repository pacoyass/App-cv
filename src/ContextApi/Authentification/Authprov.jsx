import React, { createContext, useEffect, useState } from 'react'
import { app } from '../../Firebase/configs'
export const AuthContext=createContext()
export  function Authprov(props) {
  const [isLogin,setisLogin]=useState('')
  useEffect(() => {
      app.onAuthStateChanged((response)=>{
   setisLogin(response)
    console.log(response)
      })
      
  }, []);

     function register(email,password){
         app.createUserWithEmailAndPassword(email,password)
         .then(()=>{
             window.location='/Menu'
         })
         .catch(err=>(err))
     }

   function login(email,password){
       app.signInWithEmailAndPassword(email,password)
       .then(()=>{
           window.location='/Menu'
       })
       .catch(err=>alert(err))
   }












    return (
        <div>
            <AuthContext.Provider value={{register,
                login}}>
                {props.children}
            </AuthContext.Provider>
        </div>
    )
}
