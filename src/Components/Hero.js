import "../styles/Hero.css"

export default function Hero(){

  return(
    <div className="container">
      <div data-aos="fade-right" 
       data-aos-easing="ease-in-sine"
       className="hero_content">
        {/* <h2 className="hero_title">Продажа легковых автомобилей</h2> */}
        <h3 className="hero__sec-title">CHOOSE THE BEST!</h3>
        <p className="hero_text">Specialize in Used, New and Imported JDM cars.</p>
      </div>    
    </div>
  )
}