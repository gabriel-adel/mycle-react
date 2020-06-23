import React from 'react'

export default function Teste(){
    const authenticated = localStorage.getItem('authenticate');
    console.log(authenticated)
    return(
        <h1>teste</h1>
        
    )
}