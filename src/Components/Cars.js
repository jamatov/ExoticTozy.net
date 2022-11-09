import React from "react";
import carsImage from "../img/cars-card__image.jpg"
import carsImage2 from "../img/cars-card__image2.jpg"
import '../styles/Cars.css'

export default function Cars(){
  return(
    <section id="cars">
      <div className="container">
        <h1 className="cars-title">Наш модельный ряд</h1>
        <p className="cars-info">Новые поступления автосалона</p>
        <div className="cars-cards">
          <div className="cars-cards__card">
            <img className="cars-cards__card-image" src={carsImage2} alt="" />
            <h2 className="cars-cards__title">Mercedes-Benz › C 43 AMG</h2>
            <p className="cars-cards__info">Выпускается с 2018 года. Одна базовая комплектация.Двигатель 3.0, бензиновый. Привод полный. КПП: автоматическая.</p>
            <span className="card-price__info">Цена:</span><span className="cars-price__number">4 090 000 </span><span className="card-price__info">руб.</span>
            <div className="cars-card__btn">
              <a className="cars-card__btn-link" href="#">Test-drive</a>
            </div>
          </div>

          <div className="cars-cards__card">
            <img className="cars-cards__card-image" src={carsImage} alt="" />
            <h2 className="cars-cards__title">Mercedes-Benz › C 43 AMG</h2>
            <p className="cars-cards__info">Выпускается с 2018 года. Одна базовая комплектация.Двигатель 3.0, бензиновый. Привод полный. КПП: автоматическая.</p>
            <span className="card-price__info">Цена:</span><span className="cars-price__number">4 090 000 </span><span className="card-price__info">руб.</span>
            <div className="cars-card__btn">
              <a className="cars-card__btn-link" href="#">Test-drive</a>
            </div>
          </div>

          <div className="cars-cards__card">
            <img className="cars-cards__card-image" src={carsImage2} alt="" />
            <h2 className="cars-cards__title">Mercedes-Benz › C 43 AMG</h2>
            <p className="cars-cards__info">Выпускается с 2018 года. Одна базовая комплектация.Двигатель 3.0, бензиновый. Привод полный. КПП: автоматическая.</p>
            <span className="card-price__info">Цена:</span><span className="cars-price__number">4 090 000 </span><span className="card-price__info">руб.</span>
            <div className="cars-card__btn">
              <a className="cars-card__btn-link" href="#">Test-drive</a>
            </div>
          </div>
        </div>
          <div className="cars-wiew-button">
            <a className="cars_wiew-btn" href="#">View all</a>
          </div>
      </div>
    </section>

  )
}