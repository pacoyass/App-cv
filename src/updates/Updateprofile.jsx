import React,{useContext,useEffect,useState} from 'react'
import { procontext } from '../ContextApi/profile crud/Dataprof'
import {storage} from '../firebase/Config'

export default function Updateprofile(props) {
const {profils,updprofile}=useContext(procontext)
const [uprof,setuprof]=useState({})
const [url,seturl]=useState("")






    function hndlinput(e){
    
        setuprof({
          ...uprof,
          [e.target.name]:e.target.value
        })
     }


     function sndtodat(){
    const id=props.match.params.id
    updprofile(uprof,id,url)
    props.history.push('/Addprofile')
}
useEffect(() => {
    const id = props.match.params.id;

     
        profils.filter(datas => datas.id == id)
        .map(datas => {
          console.log(datas)
          setuprof({
            nom: datas.nom,
            prenom: datas.prenom,
            dateofbirth: datas.dateofbirth,
            email:datas.email,
            phone:datas.phone,
            specialiter:datas.specialiter,
            description: datas.description,
            image: datas.image,
          });
        });
   
      console.log(profils)
  }, []);


function hndlImage(e){
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
        seturl(fireBaseUrl)
      
      
       })
    })
    
    }


   
    return (
        
            <div className="bodyex form-group container mr-4 w-80">

<h1 className="form-group text-center ml-10">Update Profile :</h1>


<div className="form-group ">
<label />Nom
<input name="nom" onChange={hndlinput} defaultValue={uprof.nom} type="text" className="form-control" id="usr" required/>
</div>

<div className="form-group">
<label/>Prénom
<input  name="prenom" onChange={hndlinput}  defaultValue={uprof.prenom} type="text" className="form-control" required />
</div>


<div className="form-group">
<label/>Date de naissance
<input name="dateofbirth" onChange={hndlinput} defaultValue={uprof.dateofbirth} type="date" className="form-control" required />
</div>


<div className="form-group">
<label/>Email
<input name="email" onChange={hndlinput} defaultValue={uprof.email} type="email" className="form-control "required />

</div>
<div className="form-group">
<label/>Téléphone
<input name="phone" onChange={hndlinput} defaultValue={uprof.phone}  type="text" className="form-control " required />

</div>
<div className="form-group">
<label/>Spécialité
<input name="specialiter" onChange={hndlinput} defaultValue={uprof.specialiter}  type="text" className="form-control " required />

</div>
<div className="form-group">
<label/>Description
<textarea name="description" onChange={hndlinput} defaultValue={uprof.description} className="form-control " required />

</div>
<div className="col-md-6 mb-4">
<form className="md-form">
  <div className="file-field">
    <div className="mb-4">
     
    </div>
    <div className="d-flex justify-content-center">
      <div className="  form-group">
       <img src={uprof.image} alt=""/>
        <input name="image" onChange={hndlImage}  className="form-control " type="file" required />
      </div>
    </div>
  </div>
</form>
</div>

<div className="form-group">

<button  onClick={sndtodat} type="submit" className="form-control bg-warning" >Update</button>

</div>
{/* <table className="table bodyex form-group container  margin:0 mr-5 ">
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
<td><img src={profile.image} alt=""/></td>

</tr>
))}

</tbody>
</table> */}

</div>
        
    )
}
