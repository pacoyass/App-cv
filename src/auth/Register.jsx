import React, { useContext, useState } from 'react'
import { AuthContext } from '../ContextApi/Authentification/Authprov'
export default function Register() {
    const {register}=useContext(AuthContext)
    const [user,setuser]=useState({})
    function handleInputs(e){
     setuser({ 
         ...user,
         [e.target.name]:e.target.value
          })
    }
    function sendToAuth(){
        register(user.email,user.password)
    }











  return (
        <div className='text'>
          <h1 className="text-secondary text-center">Inscription</h1>
                <div className="form-group col-md-6 offset-3">
                    <label/>Enter votre Mail:
                    <input name='email' onChange={handleInputs} type="email" placeholder='email' className="form-control"/>
                    <label/>Mot de passe :
                    <input name='password' onChange={handleInputs} type="password" placeholder='password' className="form-control"/>
                    <label/>Date de naissance :
                    <input name='date'  type="date" placeholder='Date de naissance' className="form-control"/>
                    <label/> Numero de Telephone :
                    <input name='number'  type="number" placeholder='Téléphone' className="form-control"/>
                    <button onClick={sendToAuth} className="btn btn-success mt-2 float-right">S'inscrire</button>
                </div>
        </div>
    )
}
