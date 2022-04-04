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
import { useState } from "react";


const Home = () => {

    const [list, setList] = useState([
        {
            heading: "Numlock",
            type: "Arcade",
            color: "",
            image: "https://onfire.craftwork.design/images/s-5-img-6@2x.png",
            url: "./Numlock",
            id: 1
        },
        {
            heading: "Decko",
            type: "Puzzle",
            color: "",
            image: "https://craftwork-images.b-cdn.net/wp-content/uploads/edd/Card-4-68.png",
            url: "./Decko",
            id: 2
        },
        {
            heading: "Matchbox",
            type: "Arcade",
            color: "",
            image: "https://onfire.craftwork.design/images/s-5-img-6@2x.png",
            url: "./Matchbox",
            id: 3
        },
        {
            heading: "Sliced",
            type: "Arcade",
            color: "",
            image: "https://craftwork-images.b-cdn.net/wp-content/uploads/edd/Card-4-68.png",
            url: "./Sliced",
            id: 4
        },
        {
            heading: "Gothic",
            type: "Arcade",
            color: "",
            image: "https://onfire.craftwork.design/images/s-5-img-6@2x.png",
            url: "./Gothic",
            id: 5
        },
        {
            heading: "Huddle",
            type: "Arcade",
            color: "",
            image: "https://craftwork-images.b-cdn.net/wp-content/uploads/edd/Card-4-68.png",
            url: "./Huddle",
            id: 6
        }
    ])

    return (
        <Router>
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
                                {list.map((block) => (
                                    <div className="block" key={block.id}>
                                        <div className="blockBar yellow"></div>
                                        <div className="blockContent">
                                            <div>
                                                <img src={block.image} alt= "cover image" />
                                                <h3 className="heading">{block.heading}</h3>
                                            </div>
                                            <div className="blockBottom">
                                                <p>{block.type}</p>
                                                <Link to={block.url} className="nextIcon"> <MdNavigateNext fill="white" /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Footer /> 
                    </div>
                     
                </div>
            </div>
        </Router>
    )
}

export default  Home;