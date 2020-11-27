import React, { useContext, useEffect, useState } from 'react'
import { dashcontext } from '../ContextApi/formation crud/Datacenter1'

export default function Updatefromation(props) {
    const id=props.match.params.id 
    const {formations,updadatefroma}=useContext(dashcontext)
    const [user,setuser]=useState({})
    function handlInput(e){
        setuser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    function SendToParent(){
        updadatefroma(id,user)
        props.history.push('/Addformation')
       }
       useEffect(() => {
        function fetchData(){
            formations.filter(data=>data.id==id)
            .map(info=>{
                setuser({
                    titre:info.titre,
                    nomber:info.nomber,
                    datedentrer:info.datedentrer,
                    datedsortie:info.datedsortie,
                    Diplome:info.Diplome,
                })
            })
        }
        fetchData()
    }, [])
    return (
        <div>
            < div className='col-md-6 offset-3 '>
            <h1 className='text-secondary '> Modification</h1>
                <div className='mt-5'>
                <label/>Ecole,Université ou Centre de formation:
         <input onChange={handlInput} name='titre'  defaultValue={user.titre} type="text" className='form-control'/>
         <label/>Nombre d'année (Etudier ou former)
         <input onChange={handlInput} name='nomber'  defaultValue={user.nomber} type="text" className='form-control'/>
         <label/>Date d'entre
         <input onChange={handlInput} name='datedentrer'  defaultValue={user.datedentrer} type="date" className='form-control'/>
         <label/>Date de sortie
         <input onChange={handlInput} name='datedsortie'  defaultValue={user.datedsortie} type="date" className='form-control'/>
         <label/>Diplome obtenu
         <input onChange={handlInput} name='Diplome'  defaultValue={user.Diplome} type="text" className='form-control'/>

         <button onClick={SendToParent}  className="btn btn-warning mt-2 float-right">Modifier</button>
         </div>
     </div>
        </div>
    )
}
