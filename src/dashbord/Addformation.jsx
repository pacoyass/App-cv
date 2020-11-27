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

  {formations.map(forma=>(
        
        <div className="col-md-7 offset-3">
        <div className="card mb-5">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3 ">
                <h6 className="mb-0">Ecole,Université ou Centre de formation</h6>
              </div>
              <div className="col-sm-9  text-secondary text-center">
              {forma.titre}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Nomber d'année</h6>
              </div>
              <div className="col-sm-9 text-secondary text-center">
              {forma.nomber}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Date d'entre</h6>
              </div>
              <div className="col-sm-9 text-secondary text-center">
              {forma.datedentrer}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Date de sortie</h6>
              </div>
              <div className="col-sm-9 text-secondary text-center">
              {forma.datedsortie}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Diplome</h6>
              </div>
              <div className="col-sm-9 text-secondary text-center">
              {forma.Diplome}
              </div>
            </div>
            <button style={{width:100,}}  className='btn btn-warning text-center form-control mt-2'><Link  style={{ color:'white'}} to={'/updateformation/'+forma.id} >Modifier</Link></button>
          <button style={   {width:100}} onClick={Sendtofire.bind(this,forma.id)} className='btn btn-danger mt-2 text-center form-control float-right'>Supprimer</button>
          </div>
        </div>
      </div>
  
          )) }
      {/* </table> */}
  </div>
  </div>
    )
}

 








