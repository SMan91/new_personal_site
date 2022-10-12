import React from "react";
import bootstrap from "bootstrap";

const Home = () => {
  return (
    <div class="container-fluid p-3">
      <div class="row align-items-start text-start" style={{ height: "10rem" }}>
        <div class="col-12 p-5">
          <p class="h1">Creator, Innovator, Hard Worker</p>
        </div>
      </div>

      <div
        class="row align-items-center text-center"
        style={{ height: "10rem" }}
      >
        <div class="col p-5">
          <p class="h3 ">
            Aspiring software engineer seeking to join a driven team to help in
            their endeavors and build a better future together.
          </p>
        </div>
      </div>

      <div
        class="row align-items-end"
        style={{ height: "10rem", paddingTop: "4rem" }}
      >
        <div class="col p-5">
          <figure class="text-end">
            <blockquote class="blockquote">
              <p>The best way to predict the future is to create it.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              <p>- Peter Drucker</p>
            </figcaption>
          </figure>
        </div>
      </div>
      {/* <div class="container border">
        <div class="row">
          <div class="col-md-4">col 1</div>
          <div class="col-md-5">col 2</div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
