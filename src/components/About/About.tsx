import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutText = "About Me"
    const aboutArray = Array.from({length: aboutText.length}, (_,i) => aboutText[i])

    useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

    return(
        <>
            <div className='container about-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={aboutArray}
                        index={15} />
                    </h1>
                    <p> I'm a Dallas based Software Engineer! I'm currently working as a Frontend Developer using React/CSS/HTML. 
                        Currently I'm looking for a role that will allow me to work on interesting and impactful project. 
                        This position would give me the opportunity to improve my skills and challenge me to grow and perform.</p>
                    <p>When I'm not coding I enjoy playing Rugby, hanging out with friends, playing with my dog, and traveling.</p>
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
            <Loader type="pacman" active/>
        </>
    );
}

export default About;