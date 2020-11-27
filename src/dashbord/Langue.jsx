import React, {useContext, useState } from 'react'
import { Link } from 'react-router-dom'

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
            <label/>Ajoutez Une Langue :
     <input  onChange={handlInput} name='titre' type="text" className="form-control" />
     <label/>Selectionnez votre Niveu :
        <select onChange={handlInput} name='language'  className="browser-default custom-select">
        <option selected>Choisissez votre Niveau</option>
        <option value='Notion de base'>Notion de base</option>
        <option value='Moyen'>Moyen</option>
        <option value='Execellent'>Execellent</option>
      </select>
      <button onClick={SendtoParent} className="btn btn-primary float-right mt-2">Ajouter</button>
      </div>
      </div>
  
     
      </div>
      <div className='row  tab'>
    <table className="table table-sm col-md-8 offset-3">
       <thead class="thead-dark">
    <tr>
      <th style={{fontSize:12}} scope="col">langue :</th>
      <th style={{fontSize:12}} scope="col">Niveau :</th>
      
     
      {/* <th style={{fontSize:12}} scope="col">Supprimer</th> */}
   </tr>
  </thead>
  {langues.map(forma=>(
        <tbody>
          <tr>
            {/* <th scope="row"></th> */}
            <td>{forma.titre}</td>
            <td>{forma.language}</td>
            
            
           
 
          </tr>
         
         <ul>
           <li style={{width:100,}}  className='btn btn-warning text-center form-control'><Link style={{ color:'white'}} to={'/updatelangue/'+forma.id} >Modifier</Link></li>
           <li style={{width:100}} onClick={SendToData.bind(this,forma.id)} className='btn btn-danger text-center form-control float-right'>Supprimer</li>
           </ul>
         </tbody>
          )) }
      </table>
  </div>
      </div>



      
    )
}
