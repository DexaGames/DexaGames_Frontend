import Header from "../../components/Header/HeaderSection";
import Angle from "../../components/Shapes/Angle/AngleShape";
import "./HomeStyles.css"
import {MdNavigateNext} from 'react-icons/md';
import LetterSquare from "../../components/Shapes/LetterSquare/LetterSq";
import SideBar from "../../components/SideBar/SideBarSection";
import Footer from "../../components/Footer/FooterSection";

export default function Home () {
    return (
        <>
            <div className="homeWrapper">
                <Header />
                <div className="mainBox">
                    <div className="sideBox">
                        <SideBar />
                    </div>
                    <div className="contentWrapper">
                        <div className="gameWrapper">
                            <h2 className="headText">Pick the Game for you.</h2>
                            <p className="bodyText">Choose a game to play</p>
                        </div>
                        <Footer /> 
                    </div>
                     
                </div>
            </div>
        </>
    )
}



                            {/* <div className="gameBlocks">
                                <div className="blockDetails orange">
                                    <div className="headIcon"><Angle /> </div>
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">Numlock</h3>
                                            <p>Puzzle</p>
                                        </div>
                                        <a href="/" className="nextIcon"> <MdNavigateNext fill="white"/> </a>
                                    </div>
                                </div>

                                <div className="blockOne">
                                    
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">Numlock</h3>
                                            <p>Puzzle</p>
                                        </div>
                                        <a href="/" className="nextIcon"> <MdNavigateNext fill="white"/> </a>
                                    </div>
                                </div>

                                <div className="blockDetails peach">
                                    <div className="headIcon"><LetterSquare /></div>
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">Decko</h3>
                                            <p>Puzzle</p>
                                        </div>
                                        <a href="/" className="nextIcon"><MdNavigateNext fill="white"/> </a>
                                    </div>
                                </div>
                                <div className="blockTwo">
                                    
                                </div>
                            </div> */}