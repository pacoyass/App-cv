import React from 'react'



export default function Shows(props) {
    const dateString =new Date(props.data.date).toString();
    const date1String=new Date(props.data.dates).toString();

    return (
     
            <div className="form-group container w-60 mr-5">
            


    
         <h1 className="text-center ">Profesional Experience</h1>

         <div className="">
             <h3 className=" text-secondary">Compétence</h3>
             <p> {props.data.competence} </p>
         </div>
         <div className="">
             <h3 className=" text-secondary">Formation</h3>
             <p> {props.data.formation} </p>
         </div>
         <div className="date">
             <h5 className=" text-secondary">Durée de la Formation</h5>
             <p>de {dateString} a  {date1String} </p>
         </div>
         <div className="">
             <h3 className=" text-secondary">Compétence</h3>
             <p>  </p>
         </div>
         













            </div>
    )
}
