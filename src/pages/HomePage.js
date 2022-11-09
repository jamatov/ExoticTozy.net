import React, { useEffect, useState } from 'react'
import CarsCarusel from '../Components/CarsCarusel'
import Contact from '../Components/Contact'
import Home from '../Components/Home'
import Loader from '../Components/Loader'
import SliderPlus from '../Components/SliderPlus'

export default function Xome() {

  const[loading, setIsloading] = useState(true)
  useEffect(() => {
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
          <Home/>
          <CarsCarusel/>
          {/* <SliderPlus/> */}
        </>
      }
    </>
  )
}
