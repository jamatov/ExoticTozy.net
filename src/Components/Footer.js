import '../styles/Footer.css'
import logo from "../img/logo.png"

export default function Footer() {
  return (
    <footer id='site_footer'>
      <section className='footer_section' id='contact'>
        <div className="container">
          
          <div className='company_infos'>

            <div data-aos="zoom-in" className='footer_brand'>
              <img className='footer_logo' src={logo} alt="logo" />
            </div>

            <ul data-aos="zoom-in" className="social_list">
              <li>
                <a href="https://www.instagram.com/godzillaa_dad/" target='blank' className="social_link">
                  <i className="fa-brands fa-instagram social_icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/sardor.pulatov.94" className="social_link" target='blank'>
                  <i className="fa-brands fa-facebook social_icon"></i>
                </a>
              </li>
              <li>
                {/* <a href="#" className="social_link" target='blank'>
                  <i className='bx bxl-telegram social_icon'></i>
                </a> */}
              </li>
            </ul>

            

            <div>
            
            <div data-aos="zoom-in" className='footer-contact-info'>
              <i className="fa-solid fa-location-dot cantact-icon"></i>
              <p className="company_adress home_media_20px">              
              419 CASTLETON AVE STATEN ISLAND NY 10310
              </p>
            </div>
              
              <div data-aos="zoom-in" className='footer-contact-info'>
                <i className="fa-solid fa-phone cantact-icon"></i>
                <a href="tel:+12129608666" className="company_call">
                
                  +12129608666
                </a>
              </div>
            </div>
          </div>
          <div  className='footerSiteInfo'>
            <p>© Exotic Toyz | 2022 USA</p>
          </div>
        </div>
      </section>
    </footer>
  )
}