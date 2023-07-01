import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div>
            <Link to="/main" style ={{margin: "15px", color: "white"}} class="navbar-brand" href="#">              
              Inicio</Link>
            <Link to="/login" style ={{margin: "15px", color: "white"}} class="navbar-brand" href="#"> 
            Iniciar sesion</Link>                        
        </div>
    </nav>
  )
}

