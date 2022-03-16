import {FaGithub} from "react-icons/fa"
import "./HeaderStyles.css";
import Hamburger from "./OffCanvasMenu";

export default function Header () {
    return (
        <header>
            <nav className="navBar">
                <FaGithub size="24px"/>
                <h1 className="head">DexaGames</h1>
            </nav>
        </header>
    )
}