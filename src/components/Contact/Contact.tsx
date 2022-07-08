import './Contact.scss';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const title = "Contact Me"
    const titelArray = Array.from({length: title.length}, (_,i) => title[i])
    const refForm = useRef()

    useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs.sendForm('service_vmkji3x', 'contact_form', e.currentTarget, 'dse7K1sfMFWyR3c9d').then(
            () => {
                alert('Message successfully sent!')
                window.location.reload();
            },
            () => {
                alert('Failed to send the message, please try again!')
            }
        )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className="text-zone">
                    <p>If you're looking for a trustworthy developer who's skills and values align 
                        with an open position, feel free to contact me via form below.</p>
                    <div className="contact-form">
                        <form ref={refForm.current} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" active />
        </>
    );
}

export default Contact;