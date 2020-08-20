import React from 'react'

function User({details}) {
    return(
        <div className='user container'>
            <p>{details.name}</p>
            <p>{details.email}</p>
            <p>{details.password}</p>
        </div>
    )
}

export default User