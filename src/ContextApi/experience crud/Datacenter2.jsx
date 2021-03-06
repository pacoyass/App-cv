import React, { createContext, useEffect, useState } from 'react'
import {db} from '../../firebase/Config'


export const Context2=createContext()


export  function Datacenter2(props) {
    const [profil,setprofil] =useState([]);
    useEffect(() => {
        function fetchData() {
          db.collection('experience')
            .get()
            .then(result => {
              
              const data = result.docs.map(profile => {
                return {
                  ...profile.data(),
                  id: profile.id,
                };
              });
              setprofil(data);
            });
        }
        fetchData();
      }, []);
       
       function getdt(data){
         // console.log(data)
         setprofil([...profil,data])
       db.collection('experience').add(data);
       }

       function deletfromFirebase(id) {
        db.collection('experience').doc(id).delete();
      }
    return (
        <div>
            <Context2.Provider value={{
              getdt,
              profil,
              deletfromFirebase
            }}>
                {props.children}
            </Context2.Provider>
        </div>
    )
}
