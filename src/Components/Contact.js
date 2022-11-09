import React from 'react'
import "../styles/Footer.css"

export default function Contact() {

  
  return (
    <section className='contact'>
      <div className="container">
        <h2 className='contact-title'>Contact</h2>
        <div className='contact-adress'>
          <div className='footer_info'>
            <form data-aos="fade-up-right" action='https://echo.htmlacademy.ru'>
              <label>Please enter your details</label>
              <input type="text" name='User Name:' required placeholder='Your Name'/> <br />
              <input type="Email" name='Email:' required placeholder='Your Email'/> <br />
              <textarea name="Message:" id="textarea" cols="30" rows="10" placeholder='Message'></textarea> <br />
              <input className='submit_btn' type="Submit" value='Submit'/>
            </form>
          </div>

          <div data-aos="fade-up-left" className='contact-info'>
            <div>
              <a href="https://goo.gl/maps/NNat4v9RQjYK8RH37"><i class="fa-solid fa-location-dot cantact-icon"></i></a>
              <p className='contact-info__info'>419 CASTLETON AVE STATEN ISLAND NY 10310</p>
            </div>
            <div>
              <a href="tel:+998951666763"><i class="fa-solid fa-phone cantact-icon"></i></a>
              <p className='contact-info__info'>+12129608666</p>
            </div>
            <div>
              <a href="https://goo.gl/maps/NNat4v9RQjYK8RH37"><i class="fa-solid fa-envelope cantact-icon"></i></a>
              <p className='contact-info__info'>Carsforus997@gmail.com</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className='map'>
          <p>Our address</p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6233.021029204885!2d-74.0986684840736!3d40.63452330773069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24e3f6bad1753%3A0xd27bb9091279ed0a!2zNDE5IENhc3RsZXRvbiBBdmUsIFN0YXRlbiBJc2xhbmQsIE5ZIDEwMzAxLCDQodCo0JA!5e0!3m2!1sru!2s!4v1663054363655!5m2!1sru!2s"
            frameborder="0"
            className='map'>

          </iframe>

        </div>

        

      </div>
    </section>
  )
}
