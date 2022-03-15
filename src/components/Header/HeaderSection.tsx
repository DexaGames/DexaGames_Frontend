
import "./HeaderStyles.css";
import Hamburger from "./OffCanvasMenu";

export default function Header () {
    return (
        <header>
            <nav className="navBar">
                <h1 className="head">DexaGames</h1>
                <Hamburger />
            </nav>
        </header>
    )
}