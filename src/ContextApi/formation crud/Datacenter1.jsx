import React, { createContext } from 'react'
export const dashcontext=createContext()
export  function Datacenter1 (props) {
    return (
        <div>
            
               <dashcontext.Provider>
                   {props.children}
               </dashcontext.Provider>


        </div>
    )
}
