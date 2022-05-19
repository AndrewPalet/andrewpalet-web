import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const title = "Contact Me"
    const titelArray = Array.from({length: title.length}, (_,i) => title[i])

    useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

    return(
        <>
            <div className='container contact-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={titelArray}
                        index={15} />
                    </h1>
                    <p> Hello people</p>
                    <p>More writing about myself</p>
                </div>
            </div>
            <Loader type="pacman" active />
        </>
    );
}

export default Contact;