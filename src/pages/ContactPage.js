import React, { useEffect, useState } from 'react'
import Loader from '../Components/Loader'
import Contact from "../Components/Contact"

export default function ContactPage() {
  const[loading, setIsloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 1000)
  }, [])

  return (
    <>
      {
        loading? <>
          <Loader/>
        </> : <> 
          <Contact/>
        </>
      }
    </>
  )
}
