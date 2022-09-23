import React from 'react'
import { Link } from 'react-router-dom'

export default function Visitor3() {
  return (
    <div>
      <div>
        <h1>¿Tienes entre 20 y 50 años?</h1>
        <p>Entonces esta app esta hecha a tu medida</p>
        <Link to={'/'}></Link>
      </div>
    </div>
  )
}
