import './AnimatedLetters.scss';

export interface AnimatedLettersProp {
    letterClass: string,
    strArray: string[],
    index: number
}

const AnimatedLetters = ({ letterClass, strArray, index}: AnimatedLettersProp) => {
    return(
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + index}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    );
}

export default AnimatedLetters;