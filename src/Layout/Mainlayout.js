import React from 'react'
import Navbar from '../components/Navbar'

function Mainlayout({children}) {
  return (
    <div>
        <Navbar></Navbar>
        <div>{children}</div>
    </div>
  )
}

export default Mainlayout