import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';
import { useState } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return(
        <div className='container contact-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
                    index={15} />
                </h1>
                <p> Hello people</p>
                <p>More writing about myself</p>
            </div>
        </div>
    );
}

export default Contact;