import React from "react";
import saturn from "../images/saturn.jpg";
import typewriter from "../images/typewriter.jpg";
import hiking from "../images/hiking.jpg";

const Hobbies = () => {
  return (
    <div class="container">
      <h1 class="text-center fs-1 mt-3">Hobbies</h1>
      <div class="row">
        <div class="col mt-5 mb-5">
          <div class="card">
            <img src={saturn} class="card-img-top" alt="Picture of Saturn." />
            <div class="card-body">
              <h3 class="card-title">Amateur Astronomy</h3>
              <p class="card-text">
                I have three different telescopes that I enjoy using to look out
                into the sky. I feel most at peace when contemplating the
                mysteries of the universe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="row mt-1rem"> */}
      <div class="col mt-5 mb-5">
        <div class="card">
          <img
            src={typewriter}
            class="card-img-top"
            alt="Picture of a type writer and some coffee on an old wooden table"
          />
          <div class="card-body">
            <h3 class="card-title">Creative Writing</h3>
            <p class="card-text">
              I enjoy expressing myself through creative writing. My favorite
              stories to write are spooky horror stories.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* <div class="row mt-1rem"> */}
      <div class="col mt-5 mb-5">
        <div class="card">
          <img
            src={hiking}
            class="card-img-top"
            alt="Picture of a hiker silhoutted against the setting sun."
          />
          <div class="card-body">
            <h3 class="card-title">Nature Hiking</h3>
            <p class="card-text">
              Living in Utah gives me a prime opportunity to enjoy the many
              nature hikes that we have available in the local viscinity. If
              ever I need some fresh air and a fresh perspective, I head for the
              mountains to enjoy the bounty of nature.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
