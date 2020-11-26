import React, { createContext, useEffect, useState } from 'react'
import {db} from '../../firebase/Config'
export const loisContext=createContext()
export default function Datacenter5(props) {
const[loisirs,setloisirs]=useState([])
useEffect(() => {
    function fetchData(){
        db.collection('loisirs').get()
        .then(result=>{
            
            const data=result.docs.map(loisir=>{
                return{
                    ...loisir.data(),
                    id:loisir.id
                }
            })
            setloisirs(data)
        })
    }
   fetchData()
   }, [])
   function addloisir(loisir){
    db.collection('loisirs').add(loisir)
       }

       function deletelanguage(id){
        db.collection('loisirs').doc(id).delete()
    }


    return (
        <div>
            <loisContext.Provider value={{loisirs,
                addloisir,
                deletelanguage}}>
            {props.children}
            </loisContext.Provider>
        </div>
    )
}
