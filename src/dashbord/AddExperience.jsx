import React, {  useContext, useState, } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import './AddExperience.scoped.css'
import { Context2 } from '../ContextApi/experience crud/Datacenter2'
import moment from 'moment'



export default function AddExperience(props) {

  const [secdate,setsecdate]=useState(null)
  const [sedat,setsedat]=useState(null)
  const [exper,setexper]=useState({})
  const {getdt,profil}=useContext(Context2)
  function hndlInp(e){
    setexper({
      ...exper,
      [e.target.name]:e.target.value
    })
  }
  function sendtodata2(){
     getdt({
     
        competence:exper.experience,
        formation:exper.formation,
        date:new Date(secdate).toDateString(),
        dates:new Date(sedat).toDateString(),
        description:exper.description,
        specialiter:exper.specialiter,
     })
     props.history.push('/Addexperience')
  }
  // const dateString =new Date(secdate).toDateString()
  // const date1String=new Date(sedat).toDateString()
    return (
       <div>
        <div className="bodyex form-group container w-60 margin:0 mr-5 ">
    <h2 className=" form-group text-center text-secondary ">Add Experience </h2>
<div className="form-group ">
  <label /> <h5 className="text-secondary text-center">Compétence</h5>
  <input name="experience" onChange={hndlInp} type="text" className="form-control" id="usr"/>
</div>

<div className="form-group">
  <label/> <h5 className="text-secondary text-center">Votre Formation</h5>
  <input name="formation" onChange={hndlInp} type="text" className="form-control" />
</div>
<h5 className="text-secondary text-center mt-5">Durée du Formation</h5>
<div className="container d-flex mt-5">
 
<div className="form-group mt-3 row">
  
  <label/>De  (Sinon champs Vide)
  <DatePicker   className="picker1 form-control col-lg offset-2" selected={secdate} onChange={date=>setsecdate(date)} dateFormat="MM/yyyy" maxDate={new Date()} showYearDropdown  showMonthDropdown isClearable scrollableMonthYearDropdown/>
  </div>
  <div className="form-group offset-3 mt-3 row ">
  <label/>
  Jusqu'a (Sinon champs Vide)
  <DatePicker  className="picker1 form-control col-lg offset-2 " selected={sedat} onChange={date=>setsedat(date)} dateFormat="MM/yyyy" maxDate={new Date()} showYearDropdown  showMonthDropdown isClearable scrollableMonthYearDropdown/>  
   
</div>
</div>


<div className="form-group">
  <label/> <h5 className="text-secondary text-center my-4">Description du Formation</h5>
    
       <input name="description" onChange={hndlInp} label="realisation" type="text" className="form-control"/ >
</div>


<div className="form-group">
  <label/> <h5 className="text-secondary text-center">Spécialité</h5> 
  <input name='specialiter' onChange={hndlInp} type="text" className="form-control " />

</div>


<div className="inif form-group mb-4">
 
  <input onClick={sendtodata2} type="submit" className="insub form-control bg-secondary" />

</div>

</div>




<table className="table bodyex form-group container  margin:0 mr-5 ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">Compétence</th>
      <th scope="col">Formation</th>
      <th scope="col">De</th>
      <th scope="col">A</th>
      <th scope="col">description</th>
      <th scope="col">spécialité</th>
    </tr>
  </thead>
  <tbody>
    {profil.map((profile,index)=>(
    <tr>
    <td>{index+1}</td>
    <td>{profile.competence}</td>
    <td> {profile.formation} </td>
    <td>{moment(profile.date).format('MM/yyyy')} </td>
    <td>{moment(profile.dates).format('MM/yyyy')} </td>
    <td> {profile.description} </td>
    <td> {profile.specialiter} </td>
    </tr>
    ))}
   
  </tbody>
</table>
   
      
</div>
   
    )
}
