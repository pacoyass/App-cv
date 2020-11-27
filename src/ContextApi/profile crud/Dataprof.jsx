import React, { createContext, useState,useEffect } from 'react'
import { db } from '../../firebase/Config';
export const procontext=createContext()
export  function Dataprof(props) {
    const [profils,setprofils]=useState([])

    useEffect(() => {
        function fetchData() {
          db.collection('profile')
            .get()
            .then(result => {
              
              const data = result.docs.map(profile => {
                return {
                  ...profile.data(),
                  id: profile.id,
                };
              });
              setprofils(data);
            });
        }
      

          fetchData();
      }, []);
     



function senddata(data){
    db.collection('profile').add(data)
}

function updprofile(uprof,id,url){
  if (url==""){
    db.collection('profile').doc(id).update(uprof);

  }
  else{
    const newObject = {
    id,
    nom:uprof.nom,
     prenom:uprof.prenom,
     dateofbirth:uprof.dateofbirth,
     email:uprof.email,
     phone:uprof.phone,
     specialiter:uprof.specialiter,
     description:uprof.description,
    image:url,
  }
  
  const upd = profils.map(cnt => (cnt.id === id ? (cnt = newObject) : cnt));
  db.collection('profile')
    .doc(id)
    .update(newObject);
     setprofils([...upd]);
  }
  
}

    return (
        <div>
            <procontext.Provider value={{
                profils,
                senddata,
                updprofile
            }}>
                {props.children}
            </procontext.Provider>
        </div>
    )
}
