import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import "./Ordernow";
import imag from "./img2.jpg";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const handleLinkClickScroll = () => {
    const element = document.getElementById("s11");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScroll1 = () => {
    const element = document.getElementById("p33");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScroll2 = () => {
    const element = document.getElementById("s2");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClick = () => {
    window.location.href = "./Login2.js";
  };

  return (
    <div>
      <div className="fix">
        <nav id="n1" className="navbar">
          <div className="container">
            <Link className="navlink" to="/home">
              <img className="img-responsive" src={imag} />
            </Link>

            <div className="navbar me-auto">
              <Link id="f1" className="navlink" to="/home">
                home
              </Link>

              <Link className="navlink" onClick={handleLinkClickScroll}>
                about us
              </Link>

              <Link className="navlink" onClick={handleClickScroll2}>
                menu
              </Link>

              <Link className="navlink" onClick={handleClickScroll1}>
                contact us
              </Link>

              <Link className="navlink" to="/loginpage">
                Make Reservations
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default NavBar;
