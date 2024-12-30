import "./footer.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="botom" data-testid="footer">
            <div data-testid="contact" className="contact">
                <a href="https://jungle-logic.com/" target="_blank" rel="noopener noreferrer">
                    JungleLogic Lab
                </a>
            </div>
            <div data-testid="sociallinks" className="container footersocials">
                <a key={"twiter"}
                    href={"https://x.com/JunglelogicLab"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaXTwitter />
                </a>
                <a key={"github"}
                    href={"https://github.com/leandrodalbo"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a key={"linkedin"}
                    href={"https://www.linkedin.com/in/leandrodlb/"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    )
}
