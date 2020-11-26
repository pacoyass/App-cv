import React, { useContext, useState } from 'react'
import { Context3 } from '../ContextApi/compétence crud/Datacenter3';
import './Dash.css';

export  function AddCompetence(props){
  
  const {addcomp,comps,deletefb}=useContext(Context3)
   const [compe,setcompe]=useState({});
  
  const handlinputs=(e)=>{  
    setcompe({

        ...compe, 
       [e.target.name]:e.target.value
    })
    }

    function sendToparent() {
      addcomp(compe)
      console.log(compe)
  }

  function sendtodata(id){
    deletefb(id)
}

    return (
      
<div  className="form-group container w-50">

  <h2 className="form-group ml-10">Add Competence </h2>
  {/* <div className="form-group ">
  <label />Les langues 
  <input name = "langues"  onChange={handlinputs}  type="text" className="form-control" id="usr"/>

</div> */}

<div className="form-group">
  <label/>Compétences Personnels
  <input name = "cperso"  onChange={handlinputs} type="text" className="form-control" />
</div>


<div className="form-group">
  <label/>Compétences Professionnelle
  <input  name = "cpro"  onChange={handlinputs} type="text" className="form-control" />
</div>


<div className="form-group">
 
  <button  onClick={sendToparent} 
  className="form-control btn btn-success float-right mt-2 " > Add  </button>

</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

          {/* TABLE AFFICHAGE */}
<div>

<table class="table " >
  <thead class="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">Competences Personnel</th>
      <th scope="col">Competences Professionnelle</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

        {comps.map(data=>(
        <tr>
        <th scope="row">{data.id}</th>
        <td>{data.cperso}</td>
        <td>{data.cpro}</td>
        <td><button onClick ={sendtodata.bind(this,data.id)} 
        className="btn btn-danger"> Delete</button></td> 
                    </tr>
                  ))}
                        
   
  </tbody>
</table>
</div>
</div>






    )
}
