import React, { createContext, useEffect, useState } from 'react'
import {db} from '../../firebase/Config'
export const langContext=createContext()
export default function Datacenter4(props) {
    
   const [langues,setlangues]=useState([])
   useEffect(() => {
    function fetchData(){
        db.collection('languages').get()
        .then(result=>{
            
            const data=result.docs.map(langue=>{
                return{
                    ...langue.data(),
                    id:langue.id
                }
            })
            setlangues(data)
        })
    }
   fetchData()
   }, [])

   function addlanguage(langue){
db.collection('languages').add(langue)
   }
   function deletelanguage(id){
       db.collection('languages').doc(id).delete()
   }
    return (
        <div>
            <langContext.Provider value={{langues,
                addlanguage,
                deletelanguage}}>
            {props.children}
            </langContext.Provider>
        </div>
    )
}
