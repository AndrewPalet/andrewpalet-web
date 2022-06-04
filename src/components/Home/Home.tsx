import './Home.scss'
import LogoTitle from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameText = 'ndrew'
  const jobText = 'Web Developer'
  const nameArray = Array.from(
    { length: nameText.length },
    (_, i) => nameText[i]
  )
  const jobArray = Array.from({ length: jobText.length }, (_, i) => jobText[i])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={22}
            />
          </h1>
          <h2>Frontend Developer / Mobile Applications Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faMobileAlt} color="#28A4D9" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  )
}

export default Home
