import React, { useContext, useState } from 'react'
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
             <h2 className="form-group  ml-10">Add Loisir </h2>
                     <label />Vos loisires
                     <input onChange={handlInpute} name="loisrie" type="text" className="form-control" id="usr"/>
                     <button onClick={SendtoParent} type="submit" className="form-control bg-warning" >Ajouter</button>
            </div>
            <div className="card text-center  col-md-6 offset-3" style={{width: '18rem'}}>
              <div className="card-header">
              Loisires
            </div>
            <div className="card-body  ">
          <h3 className="card-title">Loisires : </h3>
          {loisirs.map(forma=>(
          <ul className="list-group list-group-flush">
           <li className="list-group-item">{forma.loisrie}<button onClick={SendToData.bind(this,forma.id)}  type="submit" className="form-control bg-danger" >X</button></li>
            </ul>
             )) }
             </div>
          
             </div>
   </div>
          )
                                              }
