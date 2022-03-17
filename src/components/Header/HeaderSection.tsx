import {FaGithub} from "react-icons/fa"
import "./HeaderStyles.css";
import Hamburger from "./OffCanvasMenu";

export default function Header () {
    return (
        <header>
            <nav className="navBar">
                <Hamburger />
                <FaGithub size="24px"/>
                <h4 className="head">DexaGames</h4>
                {/* <div className="headBox"></div> */}
            </nav>
        </header>
    )
}