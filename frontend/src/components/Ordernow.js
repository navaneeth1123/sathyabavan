import React from "react";
import { Link } from "react-router-dom";
import imagge1 from "./menu.jpg";
import image1 from "./instagram.svg";
import image2 from "./phone-solid.svg";
import image3 from "./whatsapp.svg";
import image4 from "./envelope-solid.svg";
import "./Ordernow.css";
import NavBar from "./NavBar";

function Ordernow() {
  return (
    <div>
      <img id="i1" src={imagge1} />
      <div>
        <h1 id="a3">menu</h1>
      </div>
      <div className="container">
        <div class="row">
          <div class="col">
            <div class="card-img-top">
              <div class="card-body">
                <Link to="/staters">
                  <img id="i2" src={imagge1} />
                  <h5 id="h2" class="card-title">
                    STARTERS
                  </h5>
                  <p class="card=text"></p>
                </Link>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card-img-top">
              <div class="card-body">
                <Link to="/maincourse">
                  <img id="i2" src={imagge1} />
                  <h5 id="h2" class="card-title">
                    <p class="card-text"></p>
                    MAIN COURSE
                  </h5>
                </Link>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card-img-center">
              <div class="card-body">
                <Link to="/bevrage">
                  <img id="i2" src={imagge1} />
                  <h5 id="h2" class="card-title">
                    <p class="card-text"></p>
                    BEVARAGES
                  </h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="c1" className="container">
        <div>
          <div className="row">
            <div className="col">
              <div>
                <div className="head">
                  <h5>reach us</h5>
                </div>

                <p id="p3">
                  {" "}
                  <img id="i7" src={image2} />
                  +919943108800
                </p>
                <button>call now</button>
              </div>
            </div>

            <div className="col">
              <div>
                <div className="head">
                  <h5>follow us on</h5>
                </div>
                <div>
                  <img id="i7" src={image1} />
                  <Link to="https://www.instagram.com/">instagram</Link>
                </div>
                <div>
                  <img id="i7" src={image2} />
                  <Link to="https://www.whatsapp.com/">9943108800</Link>
                </div>
                <div>
                  <img id="i7" src={image4} />
                  <Link to="mailto:navaneethrl96@gmail.com">
                    navaneethrl96@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div>
                <div className="head">
                  <h5>business hours</h5>
                </div>

                <p id="p3">Mon: 9:00 AM – 10:30 PM</p>
                <p id="p3"> Tue: 9:00 AM – 10:30 PM </p>
                <p id="p3"> Wed: 9:00 AM – 10:30 PM </p>
                <p id="p3">Thu: 9:00 AM – 10:30 PM</p>
                <p id="p3"> Fri: 9:00 AM – 10:30 PM</p>
                <p id="p3"> Sat: 9:00 AM – 10:30 PM</p>
                <p id="p3"> Sun: 9:00 AM – 10:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p id="line">
          ________________________________________________________________________________________________________________________________________________________________________
        </p>
      </div>
    </div>
  );
}

export default Ordernow;
