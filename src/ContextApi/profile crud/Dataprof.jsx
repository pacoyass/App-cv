import React, { createContext, useState,useEffect } from 'react'
import { db } from '../../firebase/Config';
export const procontext=createContext()
export  function Dataprof(props) {
    const [profilees,setprofile]=useState([])

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
              setprofile(data);
            });
        }
        fetchData();
      }, []);
     



function senddata(data){
    db.collection('profile').add(data)
}


    return (
        <div>
            <procontext.Provider value={{
                profilees,
                senddata
            }}>
                {props.children}
            </procontext.Provider>
        </div>
    )
}
