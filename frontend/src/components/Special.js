import React from "react";
import image from "./img1.jpg";

function Special() {
  return (
    <div>
      <h1>OUR SPECIAL MENU</h1>
      <div class="row">
        <div class="col">
          <div class="card-img-top">
            <div class="card-body">
              <img id="i2" src={image} />
              <h5 id="h2">TAXI</h5>
              <p class="card=text"></p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card-img-top">
            <div class="card-body">
              <img id="i2" src={image} />
              <h5 class="card-title">TAX</h5>
              <p class="card=text"></p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card-img-top">
            <div class="card-body">
              <img id="i2" src={image} />
              <h5 class="card-title">TAX</h5>
              <p class="card=text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Special;
