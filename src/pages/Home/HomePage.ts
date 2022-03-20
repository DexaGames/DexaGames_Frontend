import Header from "../../components/Header/HeaderSection";
import "./HomeStyles.css"
import {MdNavigateNext} from 'react-icons/md';
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

                            <div className="gameBlocks">
                                <div className="blockOne">
                                    <div className="violet blockBar"></div>
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">Numlock</h3>
                                            <p>Puzzle</p>
                                        </div>
                                        <a href="/" className="nextIcon"> <MdNavigateNext fill="white"/> </a>
                                    </div>
                                </div>
                                <div className="blockTwo">
                                    <div className="orange blockBar"></div>
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">Decko</h3>
                                            <p>Puzzle</p>
                                        </div>
                                        <a href="/" className="nextIcon"> <MdNavigateNext fill="white"/> </a>
                                    </div>
                                </div>
                                <div className="blockThree">
                                    <div className="blue blockBar"></div>
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">MatchBox</h3>
                                            <p>Arcade</p>
                                        </div>
                                        <a href="/" className="nextIcon"> <MdNavigateNext fill="white"/> </a>
                                    </div>
                                </div>
                                <div className="blockFour">
                                    <div className="yellow blockBar"></div>
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">Sliced</h3>
                                            <p>Arcade</p>
                                        </div>
                                        <a href="/" className="nextIcon"> <MdNavigateNext fill="white"/> </a>
                                    </div>
                                </div>
                                <div className="blockFive">
                                    <div className="peach blockBar"></div>
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">Gothic</h3>
                                            <p>Arcade</p>
                                        </div>
                                        <a href="/" className="nextIcon"> <MdNavigateNext fill="white"/> </a>
                                    </div>
                                </div>
                                <div className="blockSix">
                                    <div className="red blockBar"></div>
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">Huddle</h3>
                                            <p>Arcade</p>
                                        </div>
                                        <a href="/" className="nextIcon"> <MdNavigateNext fill="white"/> </a>
                                    </div>
                                </div>
                            </div>
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