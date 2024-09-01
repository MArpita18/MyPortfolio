import logo from "../assets/ArpitaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-2">
    {/* <nav className="bg-red-900 mb-20 flex items-center justify-between py-6"> */}
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2" src={logo} alt="logo" style={{width: "25%"}}/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/arpita-mishra-87ba57234/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/MArpita18" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/_.arpitamishra._" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://x.com/marpita18" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter />
      </a>
    </div>
    </nav>
  )
}

export default Navbar