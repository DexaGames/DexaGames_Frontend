import "./FooterStyles.css"
import {FaTwitter, FaGithub, FaDiscord } from "react-icons/fa"

export default function Footer () {
    return (
        <footer>
            <ul className="socialLists">
                <li className="socialLink"><a href="/"><FaTwitter /></a></li>
                <li className="socialLink"><a href="/"><FaGithub /></a></li>
                <li className="socialLink"><a href="/"><FaDiscord /></a></li>
            </ul>
            <p className="footerText">Copyright © 2022 Dexagames</p>
            <div className="footerIcons">
                
            </div>
        </footer>
    )
}