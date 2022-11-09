import Loader from "../Components/Loader"
import React  from 'react'
import About from "../Components/About"

import { useEffect, useState } from "react"
import Contact from "../Components/Contact"


export default function AboutPage() {
  const[loading, setIsloading] = useState(true)
  useEffect(() => {
    setTimeout(() =>{
      setIsloading(false)
    }, 1000)
  }, [])

  return (
    <>
      {
        loading?<>
          <Loader/>
        </> : <>
          <About/>
        </>
      }
    </>
    
  )
}
