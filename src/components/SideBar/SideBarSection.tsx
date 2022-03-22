import "./SideBarStyles.css";
import {Button} from "@chakra-ui/react";
import {BsSuitHeartFill} from "react-icons/bs";

export default function SideBar () {
    return (
        <div className="sideBarWrap">
            <ul className="sideList">
                {/* <li className="sideItem"><a href="/">DexaGames</a></li> */}
                <li className="sideItem"><a href="/">How to play</a></li>
                <li className="sideItem"><a href="/">About</a></li>
                <li className="sideItem"><a href="/">Documentation</a></li>
                <li className="sideItem"><a href="/">Contribute</a></li>
                <li className="sideItem"><a href="/">Settings</a></li>
                <li className="sideItem"><a href="/">FAQ</a></li>
                <li className="sideItem"><Button rightIcon={<BsSuitHeartFill fill="#AB2121" />} colorScheme='#FFFFFF' variant='outline'>Sponsor</Button></li>
            </ul>
        </div>
    )
}