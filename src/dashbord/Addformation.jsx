import React from 'react'

export default function Addformation() {
    return (
        <div>
        < div className='form-control col-md-6 offset-3 mt-5'>
        <input  name='name'  type="text" className='form-control'/>
        <input  name='price'   type="text" className='form-control'/>
        <input  name='stock_items'  type="text" className='form-control'/>
        <button className="btn btn-warning ">Update User</button>
    </div>
        
        <div>
            <h1>hello adformation</h1>
        </div>
        </div>
    )
}
