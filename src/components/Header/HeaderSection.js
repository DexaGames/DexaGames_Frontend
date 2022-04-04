import "./HeaderStyles.css";
import {Button} from "@chakra-ui/react";
import {BsSuitHeartFill} from "react-icons/bs";
import {MdGamepad} from "react-icons/md";
import { ColorModeSwitcher } from "../DarkModeButton/ColorModeSwitcher";
import Hamburger from "./OffCanvasMenu";

export default function Header () {
    return (
        <header>
            <nav className="navBar">
                <h4 className="head">DexaGames <MdGamepad/></h4>
                <div className="menuRight">
                   <ColorModeSwitcher/>
                    <Hamburger />
                </div>
            </nav>
        </header>
    )
}