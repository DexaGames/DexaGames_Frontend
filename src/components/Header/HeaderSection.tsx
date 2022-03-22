import "./HeaderStyles.css";
import {Button} from "@chakra-ui/react"
import {BsSuitHeartFill} from "react-icons/bs"
import {MdGamepad} from "react-icons/md"
import DarkMode from "../DarkModeButton/DarkModeBtn"
export default function Header () {
    return (
        <header>
            <nav className="navBar">
                <h4 className="head">DexaGames <MdGamepad/></h4>
                <div className="menuRight">
                   <DarkMode />
                    <Button rightIcon={<BsSuitHeartFill fill="#AB2121" />} colorScheme='#FFFFFF' variant='outline'>Sponsor</Button>
                    
                </div>
            </nav>
        </header>
    )
}