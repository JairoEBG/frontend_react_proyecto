import React from 'react'
import { Link } from 'react-router-dom';


export const MainPage = () => {
  return (
    <div>      
      <h1 className="Main-page">Se encuentra en la pagina principal 
        <p>(Inicie sesión para continuar)</p>
        <Link href={'/orders'} style={{ textDecorationLine: 'underline' }}>
        Ver ordenes
        </Link>
      </h1>    
    </div>
  )
}
