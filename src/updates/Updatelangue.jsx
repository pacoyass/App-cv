import React, { useContext, useEffect, useState } from 'react'
import { langContext } from '../ContextApi/laungue curd/Datacenter4'

export default function Updatelangue(props) {
    const id=props.match.params.id
    const {langues,updadatelang}=useContext(langContext)
    const [user,setuser]=useState({})
    function handlInput(e){
        setuser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    function SendToParent(){
        updadatelang(id,user)
        props.history.push('/Langue')
       }
       useEffect(() => {
        function fetchData(){
            langues.filter(data=>data.id==id)
            .map(info=>{
                setuser({
                    titre:info.titre,
                    language:info.language,
                    
                })
            })
        }
        fetchData()
    }, [])
    return (
        <div>
            <div className='container'>
             <div className='row'>
             <div className="form-group col-md-6 offset-3">
             <h2 className="form-group  ml-10">Modifier la Langue </h2>
            <label/>Modifier :
     <input  onChange={handlInput} defaultValue={user.titre} name='titre' type="text" className="form-control" />
        <select onChange={handlInput} defaultValue={user.language} name='language'  className="browser-default custom-select">
        <option selected>Choisissez votre Niveau</option>
        <option value='Notion de base'>Notion de base</option>
        <option value='Moyen'>Moyen</option>
        <option value='Execellent'>Execellent</option>
      </select>
      <button onClick={SendToParent} className="btn btn-primary float-right">Modifier</button>
      </div>
      </div>
        </div>
        </div>
    )
}
