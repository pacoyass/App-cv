import React, { createContext } from 'react'
export const Context2=createContext()

export  function Datacenter2(props) {
    return (
        <div>
            <Context2.Provider>
                {props.children}
            </Context2.Provider>
        </div>
    )
}
