import Circle from "../../components/Shapes/DotCircle/CircleShape";
import Dots from "../../components/Shapes/Dots/DotsShape";
import "./LandingStyles.css";
import {MdNavigateNext} from 'react-icons/md';
import DifferentShapes from "../../components/Shapes/Spice/ShapesDiffer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from 'react-router-dom';
import SecondLandingPage from "./SecondLandPage";

export default function LandingPage () {
    return (
        <BrowserRouter>
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
                        <Link to="/secondPage" className="next">Next <MdNavigateNext fill="yellow"/></Link>

                        <Router>
                            <Switch>
                                <Route path="/next"><SecondLandingPage/></Route>
                            </Switch>
                        </Router>
                    </div>
                </section>
            </div>
        </BrowserRouter>
    )
}
