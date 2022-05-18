import './Home.scss';
import LogoTitle from '../../assets/images/logo-a.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                ndrew Palet
                <br />
                Web Developer
                </h1>
                <h2>Frontend Developer / Mobile Applications Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;