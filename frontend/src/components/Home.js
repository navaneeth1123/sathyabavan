import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import image from "./img5.jpg";
import imag from "./img4.jpg";
import ima from "./tabel.jpg";
import im from "./location.jpg";
import image1 from "./instagram.svg";
import image2 from "./phone-solid.svg";
import image3 from "./whatsapp.svg";
import image4 from "./envelope-solid.svg";
import image5 from "./chetinaduchicken.jpg";
import image7 from "./chickenbiriany.jpg";
import image6 from "./pannertikka.jpg";
import NavBar from "./NavBar";
import imagge1 from "./menu.jpg";
import "./NavBar.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <img id="i1" src={ima} />

      <h1 id="a1">SATHIYA BHAVAN</h1>
      <p id="a2">"Delight the Traditional and Authentic Taste of Life"</p>

      <div className="container">
        <div className="title">
          <h1 id="s11">about</h1>
          <div className="row">
            <div className="col">
              <p id="c9">
                Sathiyabhavanam has a range of unique treats created just to
                satiate your taste buds. From wholesome healthy options to
                exquisite sweets, we have innovated and reinvented the
                celebrated South Indian Cuisine for some special delicacies
                available exclusively at our outlets.
              </p>
            </div>
            <div className="col">
              <img id="o2" src={image} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 id="s1">our story</h1>
        <div className="row" id="r2">
          <div className="col">
            <img id="o2" src={image} />
          </div>
          <div className="col">
            <p id="c9">
              Founded in 2022, Sathiyabhavanam began as a dream shared by a
              group of passionate food enthusiasts. Our journey started with a
              simple vision to create a haven for food lovers, a place where the
              art of cooking meets the joy of sharing. Over the years, this
              vision has blossomed into a reality that we proudly present to you
              today.
            </p>
            <p id="c9">Founder : TG SATHIYAMURTHY</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 id="s1">OUR FOUNDER</h1>
        <div className="row" id="r2">
          <div className="col">
            <p id="c9">
              Sathiyabhavanam has a range of unique treats created just to
              satiate your taste buds. From wholesome healthy options to
              exquisite sweets, we have innovated and reinvented the celebrated
              South Indian Cuisine for some special delicacies available
              exclusively at our outlets.
            </p>
          </div>
          <div className="col">
            <img id="o2" src={imag} />
          </div>
        </div>
      </div>

      <div className="container">
        <div id="s2">
          <h1>OUR MENU</h1>
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

        <div className="container">
          <h1 id="s2">OUR TASTY POINTS</h1>
        </div>
        <div className="d-flex">
          <img id="i4" src={im} />
          <Link to="/https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu/@11.0141633,76.6718348,11z/data=!3m1!4b1!4m6!3m5!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!8m2!3d11.0168445!4d76.9558321!16zL20vMDE5ZmM0?entry=ttu">
            Sitra, Avanishi Main Road, Civil Aerodrome Post,
            Coimbatore - 641 014
          </Link>
        </div>
        <div>
          <img id="i4" src={im} />
          <Link to="/">
            #104/2, 20th main, 1st cross, Maruthi Nagar Main Rd, BTM Layout,
            Bengaluru, Karnataka 560068
          </Link>
        </div>
        <div id="c1" className="container">
          <div>
            <div className="row">
              <div className="col">
                <div>
                  <div className="head">
                    <h5>reach us</h5>
                  </div>

                  <p id="p33">
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
                  <p id="p3">Tue: 9:00 AM – 10:30 PM </p>
                  <p id="p3">Wed: 9:00 AM – 10:30 PM </p>
                  <p id="p3">Thu: 9:00 AM – 10:30 PM</p>
                  <p id="p3">Fri: 9:00 AM – 10:30 PM</p>
                  <p id="p3">Sat: 9:00 AM – 10:30 PM</p>
                  <p id="p3">Sun: 9:00 AM – 10:30 PM</p>
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
    </div>
  );
}
