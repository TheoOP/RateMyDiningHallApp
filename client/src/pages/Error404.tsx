import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>    
    <h1>Error404</h1>
    <Link to={'/homeV2'} >RETURN TO HOME</Link>
    </>
  )
}

export default Error404