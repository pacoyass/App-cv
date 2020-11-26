import React from 'react'
import { useContext } from 'react'
import { Context2 } from '../ContextApi/experience crud/Datacenter2'
import moment from 'moment'
import '../dashbord/Dash.css'


export default function Dashb(props) {
   const {profil}=useContext(Context2) 
    
    
   
    return (
        <div className="bodyex form-group container w-60 margin:0 mr-5">
            

         {profil.map((pro) => (
             
    <div>

        <h1 className="text-center text-secondary ">Profesional Experience</h1>
        <h3 className=" text-secondary ml-5 mt-5">Compétence</h3>
        <ul className="ulist  ml-2">
           <li className="lite ml-4">{pro.competence}</li>
        </ul>
        <h3 className=" text-secondary ml-5 mb-3">Formation</h3>
        <ul className="ulist my-3 ml-2">
           <li className="lite ml-4">{pro.formation} </li>
        </ul>
        <h3 className=" text-secondary ml-5 mb-1">Durée de la Formation</h3>
        <ul className="ulist my-3 ml-2 d-flex">
            <li className="lite ml-4"></li>
           <li className=" ml-1"><h5>De : </h5></li>
           <li className=" mt-1 "><h6>{pro.date}</h6></li>
           <li className="offset-3 ml-4"><h5>A : </h5></li>
           <li className=" mt-1"><h6>{moment(pro.dates).format('MM/yyyy')}</h6></li>
        </ul>
        <h3 className=" text-secondary ml-5 mb-3">Description</h3>
        <ul className="ulist my-3 ml-2">
           <li className="lite ml-4">{pro.description} </li>
        </ul>
        <h3 className=" text-secondary ml-5 ">Spécialité</h3>
        <ul className="form-group   ulist my-3 ml-2">
           <li className="lite ml-4">{pro.specialiter} </li>
           <li className="form-group-item offset-4 "><button className="btn btn-danger d">Delet</button></li>
        </ul>
      
       </div>
        

))}
 </div>


         
    )
}
