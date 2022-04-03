import Header from "../../components/Header/HeaderSection";
import "./HomeStyles.css"
import {MdNavigateNext} from 'react-icons/md';
import SideBar from "../../components/SideBar/SideBarSection";
import Footer from "../../components/Footer/FooterSection";
import {
    BrowserRouter as Router,
    Route,
    Link
    // RouteComponentProps
  } from "react-router-dom"; 
import Numlock from "../../components/GameBlocks/Numlock/NumlockPage";
import Decko from "../../components/GameBlocks/Decko/DeckoPage";
import { Interface } from "readline";
import { Props, useState } from "react";




interface IBlocks {
    heading: string
    type: string
    url?: string 
}

const Home :React.FC<IBlocks[]> = (props: IBlocks[]) => {
    const renderBlock = (): JSX.Element[] => {
        return props.map((idx) => {
            return (
                <div className="blockOne">
                    <div className="violet blockBar"></div>
                    <div className="blockContent">
                        <div>
                            <h3 className="heading">{idx.heading}</h3>
                            <p>{idx.type}</p>
                        </div>
                        <Link to="./Numlock" className="nextIcon"> <MdNavigateNext fill="white"/> </Link>
                    </div>
                </div>
            )
        })
    }

    // const [display, setDisplay] = useState([
    //     {
    //         heading: "Numlock",
    //         type: "Arcade"
    //     }
    // ])

    return (
        <Router>
            {/* <div className="homeWrapper">
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
                                
                               {renderBlock}

                                <div className="blockTwo">
                                    <div className="orange blockBar"></div>
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">Decko</h3>
                                            <p>Puzzle</p>
                                        </div>
                                        <a href="/.Decko" className="nextIcon"> <MdNavigateNext fill="white"/> </a>
                                    </div>
                                </div>

                                <div className="blockThree">
                                    <div className="blue blockBar"></div>
                                    <div className="blockContent">
                                        <div>
                                            <h3 className="heading">MatchBox</h3>
                                            <p>Arcade</p>
                                        </div>
                                        <Link to="/" className="nextIcon"> <MdNavigateNext fill="white"/> </Link>
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
                                {/* <Route path="./Numlock" exact component={Numlock} />
                                <Route path="./Decko" exact component={Decko} /> 
                            </div>
                        </div>
                        <Footer /> 
                    </div>
                     
                </div>
            </div> */}
        </Router>
    )
}

export default  Home;

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