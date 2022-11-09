import "../styles/Home.css"
import Hero from "./Hero"

export default function Home() {
  return ( 
    <>
    <section className="home_section">
      <div className="home__bgcolor">
        <div className="container">
          <div className="home__info">
          </div>
        </div>
        <Hero/>
      </div>
    </section>
  </>
  )
}