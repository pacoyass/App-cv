import React, { createContext } from 'react'
export const dashcontext=createContext()
export  function Dashbord(props) {
    return (
        <div>
            
               <dashcontext.Provider>
                   {props.children}
               </dashcontext.Provider>


        </div>
    )
}
