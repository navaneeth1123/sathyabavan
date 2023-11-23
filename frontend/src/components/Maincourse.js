import React from "react";
import { Link } from "react-router-dom";
import imagge1 from "./maincourse.jpg";
import image1 from "./instagram.svg";
import image2 from "./phone-solid.svg";
import image3 from "./whatsapp.svg";
import image4 from "./envelope-solid.svg";
import image5 from "./chetinaduchicken.jpg";
import image6 from "./chickenbiriany.jpg";
import image7 from "./chickenbuttermasala.jpg";
import image8 from "./tahli.jpg";
import "./Starters.css";
import NavBar from "./NavBar";

function maincourse() {
  return (
    <div>
      <div>
        <img id="i1" src={imagge1} />
        <div>
          <h1 id="a3">MAIN COURSE</h1>
        </div>
        <div className="container">
          <div class="row">
            <div id="t2" class="col">
              <div class="card-img-top">
                <div class="card-body">
                  <img id="i2" src={image5} />
                  <h5 id="t1" class="card-title">
                    CHICKEN CHETINADU
                  </h5>
                  <p class="card-text">
                    made of coconut, whole spices, including cumin, coriander,
                    cinnamon, cloves, fennel, peppercorns, cardamom, cashews,
                    and occasionally, tamarind.
                  </p>
                  {/* <button id="b1">add to cart</button> */}
                </div>
              </div>
            </div>

            <div id="t2" class="col">
              <div class="card-img-top">
                <div class="card-body">
                  <img id="i2" src={image7} />
                  <h5 id="t1" class="card-title">
                    CHICKEN BIRIANY
                  </h5>
                  <p class="card-text">
                    Fresh herbs, saffron, and basmati rice. Whole garam masala,
                    fried onions, and marinated meat Overall, it tastes like a
                    savory, spiced rice pilaf.
                  </p>
                  {/* <button id="b1">add to cart</button> */}
                </div>
              </div>
            </div>

            <div id="t2" class="col">
              <div class="card-img-top">
                <div class="card-body">
                  <img id="i2" src={image6} />
                  <h5 id="t1" class="card-title">
                    CHICKEN BUTTER MASALA
                  </h5>
                  <p class="card-text">
                    grilled chicken simmered in a smooth, silky and creamy onion
                    tomato and cashew gravy.
                  </p>
                  {/* <button id="b1">add to cart</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <div class="row">
              <div id="t2" class="col">
                <div class="card-img-top">
                  <div class="card-body">
                    <img id="i2" src={image8} />
                    <h5 id="t1" class="card-title">
                      VEG THALI
                    </h5>
                    <p class="card-text">
                      dal, rice, vegetable curry, roti, dahi, papad, salad, a
                      small amount of chutney or pickle and a sweet dish.
                    </p>
                    {/* <button id="b1">add to cart</button> */}
                  </div>
                </div>
              </div>

              <div id="t2" class="col">
                <div class="card-img-top">
                  <div class="card-body">
                    <img id="i2" src={image7} />
                    <h5 id="t1" class="card-title">
                      PENNER BUTTER MASALA
                    </h5>
                    <p class="card=text">
                      grilled PANNER simmered in a smooth, silky and creamy
                      onion tomato and cashew gravy.
                    </p>
                    {/* <button id="b1">add to cart</button> */}
                  </div>
                </div>
              </div>

              <div id="t2" class="col"></div>
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

export default maincourse;
