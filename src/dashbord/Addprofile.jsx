import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { procontext } from '../ContextApi/profile crud/Dataprof'
import {storage} from '../firebase/Config'

export default function Addprofile(props) {
  const [profiles,setprofiles]=useState({})
  const [Url,setUrl]=useState("")
  const {senddata,profils}=useContext(procontext)
  
   
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
     image:Url,
     
   })
  }
   
  
 
function changeImage(e){
  const img=e.target.files[0]
  const uploadTask = storage.ref(`/image/${img.name}`).put(img)
  uploadTask.on('state_changed', 
  (snapShot) => {
    //takes a snap shot of the process as it is happening
    console.log(snapShot)
  }, (err) => {
    //catches the errors
    console.log(err)
  }, () => {
    // gets the functions from storage refences the image storage in firebase by the children
    // gets the download url then sets the image from firebase as the value for the imgUrl key:
    storage.ref('image').child(img.name).getDownloadURL()
     .then(fireBaseUrl => {
      console.log(fireBaseUrl);
      setUrl(fireBaseUrl)
    
    
     })
  })
    
  }

    return (
      profils.length==0 ? ( 
        <div className="bodyex form-group container mr-4 w-80">

        <h1 className="form-group text-center ml-10">Add Profile :</h1>


    <div className="form-group ">
      <label />Nom
      <input name="nom" onChange={hndlinput} type="text" className="form-control" id="usr" required/>
    </div>
    
    <div className="form-group">
      <label/>Prénom
      <input  name="prenom" onChange={hndlinput} type="text" className="form-control" required />
    </div>
    
    
    <div className="form-group">
      <label/>Date de naissance
      <input name="dateofbirth" onChange={hndlinput}  type="date" className="form-control" required />
    </div>
    
    
    <div className="form-group">
      <label/>Email
      <input name="email" onChange={hndlinput} type="email" className="form-control "required />
    
    </div>
    <div className="form-group">
      <label/>Téléphone
      <input name="phone" onChange={hndlinput}  type="text" className="form-control " required />
    
    </div>
    <div className="form-group">
      <label/>Spécialité
      <input name="specialiter" onChange={hndlinput}  type="text" className="form-control " required />
    
    </div>
    <div className="form-group">
      <label/>Description
      <textarea name="description" onChange={hndlinput}  className="form-control " required />
    
    </div>
    <div className="col-md-6 mb-4">
        <form className="md-form">
          <div className="file-field">
            <div className="mb-4">
             
            </div>
            <div className="d-flex justify-content-center">
              <div className="  form-group">
               
                <input name="image"  onChange={changeImage}  className="form-control " type="file" required />
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
    {profils.map((profile,index)=>(
    <tr>
    <td>{index+1}</td>
    <td>{profile.nom}{profile.prenom}</td>
    <td> {profile.dateofbirth} </td>
    <td>{profile.email} </td>
    <td>{profile.phone} </td>
    <td> {profile.specialiter} </td>
    <td> {profile.description} </td>
    <td><img src={profile.image} alt=""/></td>
    
    </tr>
    ))}
   
  </tbody>
</table>
    
       </div>
       ):
       <div className="form-group ">

         {profils.map(data=>(
         <Link to={"updateprof/"+data.id} className="btn btn-warning form-control mt-5">update profile</Link>
         ))}
         
       </div>
    )
    }
