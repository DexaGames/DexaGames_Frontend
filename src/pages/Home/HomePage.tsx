import Header from "../../components/Header/HeaderSection";
import "./HomeStyles.css"

export default function Home () {
    return (
        <div className="homeWrapper">
            <Header />
            <div className="mainBox">
                <h2 className="headText">Games</h2>
                <p className="bodyText">Choose a game to play</p>

                <div className="gameBlocks">
                    <div className="blockOne"></div>
                    <div className="blockTwo"></div>
                </div>
            </div>
        </div>
    )
}