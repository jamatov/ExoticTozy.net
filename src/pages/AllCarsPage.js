import React, { useEffect, useState } from 'react'
import AllCars from "../Components/AllCars"
import Loader from '../Components/Loader'

export default function AllCarsPage() {
  const[loading, setIsloading] = useState(true)

  useEffect(() =>{
    setTimeout(() =>{
      setIsloading(false)
    }, 1000)
  }, [])

  return (
    <>
      {
        loading? <> 
          <Loader/>
        </> : <> 
          <AllCars/>
        </>
      }
    </>
  )
}
