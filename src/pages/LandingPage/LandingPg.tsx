import Angle from "../../components/Shapes/Angle/AngleShape"
import Circle from "../../components/Shapes/DotCircle/CircleShape"
import Dots from "../../components/Shapes/Dots/DotsShape"
import Square from "../../components/Shapes/Square/SquareShape"
import "./LandingStyles.css"

export default function LandingPage () {
    return (
        <div className="wrapper">
            <div className="shapes">
                <Circle />
                <Dots />
                <Square />
                {/* <Angle /> */}
            </div>
            <div className="words">
                <h1 className="head">DexaGames</h1>
                <h2 className="explore">Explore new games with us!</h2>
                <a href="./home" className="next">Next</a>
            </div>
        </div>
    )
}