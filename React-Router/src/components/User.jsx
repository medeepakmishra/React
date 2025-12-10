import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id }= useParams()
  return (
    <div>User:{(id)+2}</div>
  )
}

export default User