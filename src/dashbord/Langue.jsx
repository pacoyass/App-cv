import React, {useContext, useState } from 'react'

import { langContext } from '../ContextApi/laungue curd/Datacenter4'

export default function Langue() {
    const {langues,addlanguage,deletelanguage}=useContext(langContext)
    const [langue,setlangue]=useState({})
function handlInput(e){
    setlangue({
        ...langue,
        [e.target.name]:e.target.value
    })
}
function SendtoParent(){
    addlanguage(langue)
}


function SendToData(id){
    deletelanguage(id)
}


 return (
     <div>
        <div className='container'>
             <div className='row'>
             <div className="form-group col-md-6 offset-3">
             <h2 className="form-group  ml-10">Ajouter Une Langue </h2>
            <label/>Ajoutez Une Langue
     <input  onChange={handlInput} name='titre' type="text" className="form-control" />
        <select onChange={handlInput} name='language'  className="browser-default custom-select">
        <option selected>Choisissez votre Niveau</option>
        <option value='Notion de base'>Notion de base</option>
        <option value='Moyen'>Moyen</option>
        <option value='Execellent'>Execellent</option>
      </select>
      <button onClick={SendtoParent} className="btn btn-primary float-right">ADD NEW</button>
      </div>
      </div>
  
      {langues.map(forma=>(
      <div className="card text-center  col-md-6 offset-3">
        <div className="card-header">
          Language
        </div>
       
        <div className="card-body  ">
          <h3 className="card-title">langue :{forma.titre} </h3>
          <h6 className="card-text">Niveau :{forma.language}</h6>
          <td onClick={SendToData.bind(this,forma.id)} className='btn btn-danger text-center form-control'>X</td>
   
        </div>
          
              </div>
              )) }
      </div>
      </div>



      
    )
}
