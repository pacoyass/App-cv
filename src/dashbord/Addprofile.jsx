import React,{useContext, useState} from 'react'
import { procontext } from '../ContextApi/profile crud/Dataprof'


export default function Addprofile(props) {
  const [profiles,setprofiles]=useState({})
  const {senddata,profilees}=useContext(procontext)
  function hndlinput(e){
     setprofiles({
       ...profiles,
       [e.target.name]:e.target.value
     })
  }

function senddt(){
   senddata({
     nom:profiles.nom,
     prenom:profiles.prenom,
     dateofbirth:profiles.dateofbirth,
     email:profiles.email,
     phone:profiles.phone,
     specialiter:profiles.specialiter,
     description:profiles.description,
     
   })
   props.history.push('/')
}
    return (
        <div className="bodyex form-group container mr-4 w-80">

        <h1 className="form-group text-center ml-10">Add Profile :</h1>


    <div className="form-group ">
      <label />Nom
      <input name="nom" onChange={hndlinput} type="text" className="form-control" id="usr"/>
    </div>
    
    <div className="form-group">
      <label/>Prénom
      <input  name="prenom" onChange={hndlinput} type="text" className="form-control" />
    </div>
    
    
    <div className="form-group">
      <label/>Date de naissance
      <input name="dateofbirth" onChange={hndlinput}  type="date" className="form-control" />
    </div>
    
    
    <div className="form-group">
      <label/>Email
      <input name="email" onChange={hndlinput}  type="email" className="form-control " />
    
    </div>
    <div className="form-group">
      <label/>Téléphone
      <input name="phone" onChange={hndlinput}  type="text" className="form-control " />
    
    </div>
    <div className="form-group">
      <label/>Spécialité
      <input name="specialiter" onChange={hndlinput}  type="text" className="form-control " />
    
    </div>
    <div className="form-group">
      <label/>Description
      <textarea name="description" onChange={hndlinput}  className="form-control " />
    
    </div>
    <div className="col-md-6 mb-4">
        <form className="md-form">
          <div className="file-field">
            <div className="mb-4">
             
            </div>
            <div className="d-flex justify-content-center">
              <div className="  form-group">
               
                <input onChange={hndlinput}  className="form-control " type="file" />
              </div>
            </div>
          </div>
        </form>
      </div>
    
    <div className="form-group">
     
    <button onClick={senddt} type="submit" className="form-control bg-warning" >Ajouter</button>
    
    </div>
    <table className="table bodyex form-group container  margin:0 mr-5 ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nom et Prenom</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
       <th scope="col">spécialité</th>
      <th scope="col">description</th>
     
    </tr>
  </thead>
  <tbody>
    {profilees.map((profile,index)=>(
    <tr>
    <td>{index+1}</td>
    <td>{profile.nom}{profile.prenom}</td>
    <td> {profile.dateofbirth} </td>
    <td>{profile.email} </td>
    <td>{profile.phone} </td>
    <td> {profile.specialiter} </td>
    <td> {profile.description} </td>
    
    </tr>
    ))}
   
  </tbody>
</table>
    
       </div>
    )
}
