import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap'
import { useLocation } from 'react-router'
import '../styles/Readmore.css'

const Readmore = (props) => {
  const [one, setOne] = useState({});
  const [images, setImages] = useState([])
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const getOne = () => {
    axios.get(`https://exotictoyz.net/back/cars/detail-cars/${path}`)
      .then((res) => {
        setOne(res.data)
        setImages(res.data.car_images)
      })
  }
  console.log((one));

  // for(let i = 1; i <= car_images)
  

  useEffect(() => {
    getOne()
  }, [])
  
  return (
    <section className='Readmore'>
      <div className='container'>
        <h2 className='r-info'>{one.name} {one.model}</h2>
        <div data-aos="zoom-in-right" className="readmore-card__images">
          {images?.map((item) => (
            <img className='w-100 read-more__image' src={item.image} alt="" />
          ))}
        </div>
        <p className='readmore-title'>{one.description}</p>
        <p className='price'><span>Price :</span> {one.price}</p>
      </div>
    </section>
  )
}

export default Readmore