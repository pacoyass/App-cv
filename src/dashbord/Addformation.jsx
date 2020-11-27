import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { dashcontext } from '../ContextApi/formation crud/Datacenter1'
import './Addformation.scoped.css'
export default function Addformation(props) {
  const {formations,addformation,deletefromFirebase}=useContext(dashcontext)
  const [formation,setformation]=useState({})
   function handlInput(e){
    setformation({
        ...formation,
        [e.target.name]:e.target.value
    })
   }
    function SendToparent(){
    addformation(formation)
    props.history.push('/Addformation')
    }
    function Sendtofire(id){
    deletefromFirebase(id)
    }
    return (
        <div className='container '>
    <div className='row offset-3'>
        <div className="form-group col-md-6  Title">

        
        <h2 className="form-group  ml-10">Ajouter Une Formation </h2>
     
     <label/>Ecole,Université ou Centre de formation:
     <input  onChange={handlInput} name='titre' type="text" className="form-control" />
     <label/>Nombre d'année (Etudier ou former)
     <input  onChange={handlInput} name='nomber' type="text" className="form-control" /> 

     <label/>Date d'entre
     <input  onChange={handlInput} name='datedentrer' type="date" className="form-control" /> 

     <label/>Date de sortie
     <input  onChange={handlInput} name='datedsortie' type="date" className="form-control" /> 
     <label/>Diplome obtenu
     <input  onChange={handlInput} name='Diplome' type="text" className="form-control " />
     <button onClick={SendToparent} style={{backgroundColor:'#119F16' ,color:'white'}} className="btn mt-2 mb-2   float-right">Ajouter</button>
     </div>
     </div>
     <div className='row  tab'>
    <table className="table table-sm col-md-8 offset-3">
       <thead class="thead-dark">
    <tr>
      <th style={{fontSize:12}} scope="col">Ecole,Université ou Centre de formation</th>
      <th style={{fontSize:12}} scope="col">Nomber d'année</th>
      <th style={{fontSize:12}} scope="col">Date d'entre</th>
      <th style={{fontSize:12}} scope="col">Date de sortie</th>
      <th style={{fontSize:12}} scope="col">Diplome</th>
      <th style={{fontSize:12}} scope="col">Modifier</th>
      <th style={{fontSize:12}} scope="col">Supprimer</th>
   </tr>
  </thead>
  {formations.map(forma=>(
        <tbody>
          <tr>
            {/* <th scope="row"></th> */}
            <td>{forma.titre}</td>
            <td>{forma.nomber}</td>
            <td>{forma.datedentrer}</td>
            <td>{forma.datedsortie}</td>
            <td>{forma.Diplome}</td>
            
          <td><Link to={'/update/'+forma.id}  className='btn btn-warning'>Update</Link></td>
          <td onClick={Sendtofire.bind(this,forma.id)} className='btn btn-danger text-center form-control'>X</td>
          </tr>
         </tbody>
          )) }
      </table>
  </div>
  </div>
    )
}

 








