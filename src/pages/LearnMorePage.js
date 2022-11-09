import React, { useEffect, useState } from 'react'
import LearnMore from '../Components/Readmore'
import Loader from '../Components/Loader'


export default function LearnMorePage() {

  const [loading, setIsloading] = useState(true)
  useEffect(() =>{
    setTimeout(() =>{
      setIsloading(false)
    }, 1000)
  }, [])

  return (
    <>
      {
        loading?
        <>
          <Loader/>
        </>:<>
          <LearnMore/>
        </>
      }
    </>
  )
}
