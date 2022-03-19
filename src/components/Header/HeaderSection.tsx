import "./HeaderStyles.css";
import Hamburger from "./OffCanvasMenu";

export default function Header () {
    return (
        <header>
            <nav className="navBar">
                <h4 className="head">DexaGames</h4>
                <Hamburger />
            </nav>
        </header>
    )
}