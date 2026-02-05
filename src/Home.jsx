import { IoLogoLinkedin, IoLogoTiktok, IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

function Home() {
  
  return (
    <>
      <header>
        <div className="home">
          <a href=""><h1>Joey Bezner</h1></a>
          <div className="headerLinkContainer">
            <a className="headerLink" href="">Works</a>
            <a className="headerLink" href="">Experience</a>
            <a className="headerLink" href="">About</a>
          </div>
          <nav>
            <a className="icon" href="https://www.linkedin.com/in/joeybezner/" target="_blank"><IoLogoLinkedin /></a>
            <a className="icon" href="https://www.instagram.com/joeys._art/" target="_blank"><RiInstagramFill /></a>
            <a className="icon" href="mailto:joeybezner@gmail.com"><IoMail /></a>
            <a className="icon" href="https://www.tiktok.com/@joeysart" target="_blank"><IoLogoTiktok /></a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Home
