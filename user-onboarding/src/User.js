import React from 'react'

function User({details}) {
    return(
        <div className='user container'>
            <h4>{details.name}</h4>
            <p>{details.email}</p>
            <p>{details.password}</p>
        </div>
    )
}

export default User