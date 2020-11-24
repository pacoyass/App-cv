import React from 'react'
import './Dash.css';
export default function AddCompetence() {
    return (
      
        <div   className="form-group container w-50">

    <h2 className="form-group ml-10">Add Competence </h2>
<div className="form-group ">
  <label />Titre
  <input type="text" className="form-control" id="usr"/>
</div>

<div className="form-group">
  <label/>Ecole
  <input type="text" className="form-control" />
</div>


<div className="form-group">
  <label/>Date
  <input type="text" className="form-control" />
</div>


<div className="form-group">
  <label/>Spécialité
  <input type="text" className="form-control " />

</div>


<div className="form-group ">
 
  <input type="submit" className="form-control bg-danger" />

</div>

   </div>
    )
}
