import "./SideBarStyles.css";

export default function SideBar () {
    return (
        <div className="sideBarWrap">
            <ul className="sideList">
                {/* <li className="sideItem"><a href="/">DexaGames</a></li> */}
                <li className="sideItem"><a href="/">About</a></li>
                <li className="sideItem"><a href="/">Rules</a></li>
                <li className="sideItem"><a href="/">Documentation</a></li>
                <li className="sideItem"><a href="/">Contribute</a></li>
                <li className="sideItem"><a href="/">Settings</a></li>
            </ul>
        </div>
    )
}