import React from 'react'
// import './first.css'
import styles from './first.css'
import Navbar from './components/layout/Navbar'

const Firstpage = () => {
  return (
    <>
    <Navbar/>
        <h1 style={{backgroundColor:"yellow"}}>This is my first react component.<br/></h1>
    </>
  )
}

export default Firstpage