import React,{useContext} from 'react'
import { Context2 } from '../ContextApi/experience crud/Datacenter2'
import Shows from './Shows'

export default function Shows1() {
    const {profil}=useContext(Context2)
    return (
        <div className="container offset-4">
            <div className="row">
            {profil.map((product,index) => (
          <Shows data={(product,index)} />
        ))}
        </div>
        </div>
    )
}
