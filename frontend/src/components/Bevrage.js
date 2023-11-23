import React from "react";
import { Link } from "react-router-dom";
import imagge1 from "./bevrage.jpg";
import image1 from "./instagram.svg";
import image2 from "./phone-solid.svg";
import image3 from "./whatsapp.svg";
import image4 from "./envelope-solid.svg";
import image5 from "./food1.jpg";
import image6 from "./pannertikka.jpg";
import image7 from "./food2.jpg";
import "./Starters.css";
import NavBar from "./NavBar";

function bevrage() {
  return (
    <div>
      <div>
        <img id="i1" src={imagge1} />
        <div>
          <h1 id="a3">BEVRAGE</h1>
        </div>
        <div className="container">
          <div class="row">
            <div id="t2" class="col">
              <div class="card-img-top">
                <div class="card-body">
                  <h5 id="t1" class="card-title">
                    TEA
                  </h5>
                  <p class="card-text">
                    Tea is an aromatic beverage prepared by pouring hot or
                    boiling water over cured or fresh leaves of Camellia
                    sinensis.
                  </p>
                  {/* <button id="b1">add to cart</button> */}
                </div>
              </div>
            </div>

            <div id="t2" class="col">
              <div class="card-img-top">
                <div class="card-body">
                  <h5 id="t1" class="card-title">
                    COFFEE
                  </h5>
                  <p class="card-text">
                    Coffee is a beverage prepared from roasted coffee beans.
                    Darkly colored, bitter, and slightly acidic,
                  </p>
                  {/* <button id="b1">add to cart</button> */}
                </div>
              </div>
            </div>

            <div id="t2" class="col"></div>
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

export default bevrage;
