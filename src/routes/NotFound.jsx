import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <h1 className='Text-danger'>ERROR 404: Not Found </h1>
      <Link to = '/' className='btn btn-outline-primary'> Volver al inicio</Link>
    </div>    
  )
}
