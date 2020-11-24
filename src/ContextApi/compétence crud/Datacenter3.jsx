import React, { createContext } from 'react'

export const Context3=createContext()
export  function Datacenter3(props) {
    return (
        <div>
            <Context3.Provider>
                {props.children}
            </Context3.Provider>
        </div>
    )
}
