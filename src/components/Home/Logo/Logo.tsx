import './Logo.scss';
import LogoSolid from '../../../assets/images/logo-a.png';

const Logo = () => {
    return(
        <div className="logo-container">
            <img className="solid-logo" src={LogoSolid} alt="A" />
            
            {/* <svg
        width="500pt"
        height="1000pt"
        version="1.0"
        viewBox="0 0 500 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 0) scale(1 1)"
          fill="none"
        >
        </g>
      </svg> */}
        </div>
    );
}

export default Logo;