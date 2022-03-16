import "./SideBarStyles.css";

export default function SideBar () {
    return (
        <div className="sideBarWrap">
            <ul className="sideList">
                <li className="sideItem"><a href="/">Rules</a></li>
                <li className="sideItem"><a href="/">Docs</a></li>
                <li className="sideItem"><a href="/">Settings</a></li>
                <li className="sideItem"><a href="/">Contributions</a></li>
                <li className="sideItem"><a href="/">Notifications</a></li>
            </ul>
        </div>
    )
}