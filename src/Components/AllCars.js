import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Allcars.css";
import { Link } from "react-router-dom";

export default function Allcars() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  const getAll =  async () => {
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
    // })
  }, []);

  return (
    <div className="Allcars">
      <div className="container">
        <div className="carsCards">
          {posts?.map((el, index) => {
            return (
              <div key={index} className="df">
                <div data-aos="zoom-in" className="allcarsCard">
                  {el.car_images?.slice(0, 1).map((item) => (
                    <img key={item.id} src={item.image} className="w-100 card-img" alt="" />
                  ))}
      
                  <div className="card-info">
                    <h1 className="cardTitle">
                      Model : <span>{el.model}</span>
                    </h1>
                    <h1 className="cardTitle">
                      Name : <span>{el.name}</span>
                    </h1>
                    <h1 className="cardTitle">
                      Price : <span>{el.price}</span>
                    </h1>
                    {/* <p className="cardDescription">{el.description}</p> */}
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                      </span>
                      <Link to={`/learnmore/${el.id}`}><span class="button-text">Learn More</span></Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
