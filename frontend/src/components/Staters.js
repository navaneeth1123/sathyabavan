import React from "react";
import { Link, useNavigate } from "react-router-dom";
import imagge1 from "./starters.jpg";
import image1 from "./instagram.svg";
import image2 from "./phone-solid.svg";
import image3 from "./whatsapp.svg";
import image4 from "./envelope-solid.svg";
import image5 from "./food1.jpg";
import image6 from "./pannertikka.jpg";
import image7 from "./food2.jpg";
import image8 from "./samosa.jpg";
import image9 from "./vada.jpg";
import image10 from "./kachori.jpg";
import NavBar from "./NavBar";
import "./Starters.css";

function Staters(props) {
  return (
    <div>
      <div>
        <img id="i1" src={imagge1} />
        <div>
          <h1 id="a3">STATERS</h1>
        </div>

        <div className="container">
          <div class="row">
            <div id="t2" class="col">
              <div class="card-img-top">
                <div class="card-body">
                  <img id="i2" src={image5} />
                  <h5 id="t1" class="card-title">
                    Achari Murgh
                  </h5>
                  <p class="card-text">
                    Soy based chicken alternative cooked with Indian pickling
                    spices. Tangy, spicy and very aromatic.
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
                    PAO BHAJ
                  </h5>
                  <p class="card-text">
                    Pav bhaji is a street food dish from India consisting of a
                    thick vegetable curry ...
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
                    PANNER TIKKA
                  </h5>
                  <p class="card-text">
                    Indian dish made from chunks of paneer/ chhena marinated in
                    spices and grilled in a tandoor
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
                      SAMOSA
                    </h5>
                    <p class="card-text">
                      A samosa is a fried South Asian pastry with a savoury
                      filling, including ingredients such as spiced...
                    </p>
                    {/* <button id="b1">add to cart</button> */}
                  </div>
                </div>
              </div>

              <div id="t2" class="col">
                <div class="card-img-top">
                  <div class="card-body">
                    <img id="i2" src={image9} />
                    <h5 id="t1" class="card-title">
                      VADA
                    </h5>
                    <p class="card=text">
                      made from legumes, sago or potatoes. Commonly used legumes
                      include pigeon pea, chickpea, black gram and green gram
                    </p>
                    {/* <button id="b1">add to cart</button> */}
                  </div>
                </div>
              </div>

              <div id="t2" class="col">
                <div class="card-img-top">
                  <div class="card-body">
                    <img id="i2" src={image10} />
                    <h5 id="t1" class="card-title">
                      KACHORI
                    </h5>
                    <p class="card-text">
                      Kachoris are deep fried breads made with ground dal
                      sauteed along with spices and filled into a cover of maida
                      and baking powder
                    </p>
                    {/* <button id="b1">add to cart</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staters;
