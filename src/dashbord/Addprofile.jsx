import React from 'react'

export default function Addprofile() {


    return (
        <div className="form-group container  w-50">

        <h2 className="form-group ml-10">Add Profile </h2>


    <div className="form-group ">
      <label />Nom
      <input type="text" className="form-control" id="usr"/>
    </div>
    
    <div className="form-group">
      <label/>Prénom
      <input type="text" className="form-control" />
    </div>
    
    
    <div className="form-group">
      <label/>Date de naissance
      <input type="date" className="form-control" />
    </div>
    
    
    <div className="form-group">
      <label/>Email
      <input type="email" className="form-control " />
    
    </div>
    <div className="form-group">
      <label/>Téléphone
      <input type="number" className="form-control " />
    
    </div>
    
    
    <div className="form-group">
     
      <input type="submit" className="form-control bg-dark" />
    
    </div>
    

    
       </div>
    )
}
