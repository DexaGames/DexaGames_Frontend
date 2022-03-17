import Angle from "../../components/Shapes/Angle/AngleShape"
import Circle from "../../components/Shapes/DotCircle/CircleShape"
import Dots from "../../components/Shapes/Dots/DotsShape"
import Square from "../../components/Shapes/Square/SquareShape"
import "./LandingStyles.css"
import {MdNavigateNext} from 'react-icons/md';
import CircleFilled from "../../components/Shapes/CircleFilled/FilledCircle"
import DifferentShapes from "../../components/Shapes/Spice/ShapesDiffer"

export default function LandingPage () {
    return (
        <div className="wrapper">
            <section className="firstPage">
                <div className="shapes">
                    <Circle />
                    <DifferentShapes />
                    <Dots />
                </div>
                <div className="words">
                    <h1 className="head">DexaGames</h1>
                    <h2 className="explore">Explore new games with us!</h2>
                    <a href="./secondPage" className="next">Next <MdNavigateNext fill="yellow"/></a>
                </div>
            </section>

            <section className="secondPage">
                <div className="shapesTwo">
                    <CircleFilled />
                </div>
            </section>
        </div>
    )
}