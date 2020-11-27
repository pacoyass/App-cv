import React, { useContext, useEffect, useState } from 'react'
import { loisContext } from '../ContextApi/loisir crud/Datacenter5'

export default function Updateloisir(props) {
    const id=props.match.params.id 
    const {loisirs,updadateloisir}=useContext(loisContext)
    const [user,setuser]=useState({})
    function handlInput(e){
        setuser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    function SendToParent(){
        updadateloisir(id,user)
        props.history.push('/Addloisir')
       }
       useEffect(() => {
        function fetchData(){
            loisirs.filter(data=>data.id==id)
            .map(info=>{
                setuser({
                    loisrie:info.loisrie,
                    
                })
            })
        }
        fetchData()
    }, [])





    return (
        <div>
            <div className="form-group col-md-6 offset-3 losire">
             <h2 className="form-group  ml-10">Add Loisir </h2>
                     <label />Vos loisires
                     <input onChange={handlInput} defaultValue={user.loisrie} name="loisrie" type="text" className="form-control" />
                     <button onClick={SendToParent} type="submit" className="form-control bg-warning" >Ajouter</button>
            </div>
        </div>
    )
}
