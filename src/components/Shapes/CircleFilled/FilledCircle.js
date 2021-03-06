import "./FilledStyles.css";
import {MdNavigateNext} from 'react-icons/md';

export default function CircleFilled () {
    return (
        <div className="colorCircle">
            <div className="yellowCircle"></div>
            <div className="halfCircle"></div>
            <div className="halfCircleTwo"></div>
            <div className="textContent">
                <h3>We’ve created a game that’s simple. Click the button below to get started</h3>
                <a href="./home" className="started">Get Started <MdNavigateNext fill="yellow"/></a>
            </div>
            <div className="quater">
                <div className="quaterCircle"></div>
                <div className="quaterCircleTwo"></div>
            </div>
            <div className="squareCirlce"></div>
        </div>
    )
}
