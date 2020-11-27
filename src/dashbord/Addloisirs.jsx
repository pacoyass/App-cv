import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { loisContext } from '../ContextApi/loisir crud/Datacenter5'
export default function Addloisirs() {
   const {loisirs,addloisir,deletelanguage}=useContext(loisContext)
   const [loisir,setloisir]=useState({})
   function handlInpute(e)
   {
      setloisir({
          ...loisir,
          [e.target.name]:e.target.value
      })
   }
        function SendtoParent()
        {
             addloisir(loisir)
        }
       function SendToData(id)
       {
            deletelanguage(id)
       }
    return (
   <div>
            <div className="form-group col-md-6 offset-3 losire">
             <h2 className="form-group  ml-10">Ajoutez vos loisires </h2>
                     <label />Vos loisires
                     <input onChange={handlInpute} name="loisrie" type="text" className="form-control" id="usr"/>
                     <button  onClick={SendtoParent} type="submit" className="form-control bg-warning mt-2" >Ajouter</button>
            </div>
            <div className="card text-center  col-md-6 offset-3" style={{width: '18rem'}}>
              <div className="card-header">
              Loisires
            </div>
            <div className="card-body  ">
          <h3 className="card-title">Loisires : </h3>
          {loisirs.map(forma=>(
          <ul className="list-group list-group-flush">
           
           <li className="list-group-item">{forma.loisrie}</li>
           
          <li> <button style={{width:100,}} onClick={SendToData.bind(this,forma.id)}  type="submit" className="form-control bg-danger" >Supprimer</button></li>
           <li style={{width:100,}}  className='btn btn-warning text-center form-control<'><Link  style={{ color:'white'}} to={'/updateloisir/'+forma.id} >Modifier</Link></li>
            </ul>
             )) }
             </div>
          
             </div>
   </div>
          )
      }
