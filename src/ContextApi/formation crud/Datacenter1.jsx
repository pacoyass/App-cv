import React, { createContext, useEffect, useState } from 'react'
import {db} from '../../firebase/Config'
export const dashcontext=createContext()
export  function Datacenter1 (props) {
   
   const [formations,setformations]=useState([])
   useEffect(() => {
    function fetchData(){
        db.collection('formations').get()
        .then(result=>{
            
            const data=result.docs.map(formation=>{
                return{
                    ...formation.data(),
                    id:formation.id
                }
            })
            setformations(data)
        })
    }
   fetchData()
   }, [])

 function addformation(formation){
        db.collection('formations').add(formation)
       }
function deletefromFirebase(id){
       db.collection('formations').doc(id).delete()
       }
return (

        <div>
            
               <dashcontext.Provider value={{formations,
                   addformation,
                   deletefromFirebase,
               }}>
                   {props.children}
               </dashcontext.Provider>


        </div>
    )
}
