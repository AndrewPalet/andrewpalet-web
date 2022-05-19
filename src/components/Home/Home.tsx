import './Home.scss';
import LogoTitle from '../../assets/images/logo-a.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameText = "ndrew"
    const jobText = "Web Developer"
    const nameArray = Array.from({length: nameText.length}, (_,i) => nameText[i])
    const jobArray = Array.from({length: jobText.length}, (_,i) => jobText[i])

    useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 4000);
		return () => clearTimeout(timer);
	}, []);

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
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    index={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    index={22} />
                    </h1>
                    <h2>Frontend Developer / Mobile Applications Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            </div>
            <Loader type="pacman" active />
        </>
    );
}

export default Home;