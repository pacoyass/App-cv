import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../firebase/Config';


export const Context3=createContext()

export  function Datacenter3(props) {

    const [comps,setcomps]=useState([]);


    useEffect(() =>{

        function fetchData(){
           db.collection('competences').get()
           .then(result=>{
               const data=result.docs.map(comp=>{

                   return{
                       ...comp.data(),
                       id:comp.id
                   }
               })
               setcomps(data)
           })
            
      
            }
            fetchData()
    
        },[]);

    function addcomp(compe){
         db.collection('competences').add(compe)
        console.log(compe)
    }

    function deletefb(id){
        db.collection('competences').doc(id).delete()
       }


    return (
        <div>
            <Context3.Provider value={{addcomp,comps,deletefb}}>
                {props.children}
            </Context3.Provider>
        </div>
    )
}
