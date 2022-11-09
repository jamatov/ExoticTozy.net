import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../styles/Carusel.css";

export default function CarsCarusel() {
  const [posts, setPosts] = useState([]);

  const getAll = async () => {
    await axios
      .get("https://exotictoyz.net/back/cars/list-cars/")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <section className="carusel" id="carusel">
      <div className="container">
        <Carousel data-aos="fade-left" data-aos-easing="ease-in-sine">
          {posts &&
            posts.map((el, index) => (
              <Carousel.Item key={index} interval={1000} className="carusel-img">
              {el.car_images?.slice(0, 1).map((item) => (
                <img key={item.id} src={item.image} className="card-img" alt="" />
                
              ))}
                <Carousel.Caption className="carusel-bg" key={index} >
                  
                  <h3 className="carusel-info-title">{el.name}, {el.model}</h3>
                  {/* <p className="carusel-price">Price : {el.price}</p> */}
                </Carousel.Caption>
               
              </Carousel.Item>
                
            ))}
          {/* <Carousel.Item interval={1000} className="carusel-img">
            <img
              className="carusel_car_img"
              src={CaruselImg3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="carusel_car_img"
              src={CaruselImg1}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carusel_car_img"
              src={CaruselImg2}
              alt="Third slide"
            />
          </Carousel.Item> */}
        </Carousel>
      </div>
    </section>
  );
}
