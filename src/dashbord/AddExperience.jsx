import React from 'react'

export default function AddExperience() {
    return (

        <div className="form-group container w-50">

    <h2 className="form-group ml-50">Add Experience </h2>
<div className="form-group ">
  <label />Nom de l'Etablissement ou l'Entreprise
  <input type="text" className="form-control" id="usr"/>
</div>

<div className="form-group">
  <label/>Nombres d'annees 
  <input type="text" className="form-control" />
</div>
<div className="form-group">
  <label/>De  (Sinon champs Vide)
  <input type="date" className="form-control" />
</div>
<div className="form-group">
  <label/>Jusqu'a (Sinon champs Vide)
  <input type="date" className="form-control" />
</div>


<div className="form-group">
  <label/>Quelle secteur
  <input type="text" className="form-control" />
</div>


<div className="form-group">
  <label/>Spécialité
  <input type="text" className="form-control " />

</div>


<div className="form-group">
 
  <input type="submit" className="form-control bg-secondary" />

</div>

   </div>
    )
}
