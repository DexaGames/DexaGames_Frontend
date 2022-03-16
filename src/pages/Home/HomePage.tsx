import Header from "../../components/Header/HeaderSection";
import Angle from "../../components/Shapes/Angle/AngleShape";
import "./HomeStyles.css"
import {MdNavigateNext} from 'react-icons/md';
import LetterSquare from "../../components/Shapes/LetterSquare/LetterSq";
import SideBar from "../../components/SideBar/SideBarSection";
import Footer from "../../components/Footer/FooterSection";

export default function Home () {
    return (
        <div className="homeWrapper">
            <Header />

            <div className="contentWrapper">
                <div className="sideBox">
                    <SideBar />
                </div>

                <div className="mainBox">
                    <h2 className="headText">Pick the Game for you.</h2>
                    <p className="bodyText">Choose a game to play</p>

                    <div className="gameBlocks">
                        <div className="blockOne">
                            <div className="blockDetails">
                                <div className="headIcon"><Angle /> </div>
                            </div>
                            <div className="blockContent">
                                <div>
                                    <h3 className="heading">Numlock</h3>
                                    <p>Puzzle</p>
                                </div>
                                <a href="/" className="nextIcon"> <MdNavigateNext fill="white"/> </a>
                            </div>
                        </div>
                        <div className="blockTwo">
                            <div className="blockDetails">
                                <LetterSquare />
                            </div>
                            <div className="blockContent">
                                <div>
                                    <h3 className="heading">Decko</h3>
                                    <p>Puzzle</p>
                                </div>
                                <a href="/" className="nextIcon"><MdNavigateNext fill="white"/> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}