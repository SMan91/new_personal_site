import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio_page">
      <h1 class="text-center fs-1 mt-3 mb-5">Portfolio</h1>
      <div class="container">
        <p class="shadow-sm px-lg-5 m-lg-5">
          Through years of experience in college, I have been fortunate in
          becoming familiar with many programming languages including Java,
          JavaScript, C, C#, C++, Python, SQL, and Matlab. Most recently, I was
          able to complete a certification course for JavaScript and Web Design.
          Below are some of the JavaScript projects we completed throughout the
          certification course as well as some personal projects.
        </p>
        <div class="row">
          <div class="col-lg-6 col-sm-12 mb-3">
            <div class="card">
              <h3 class="card-title text-bg-dark p-2">
                Project Name: Fullstack Felines
              </h3>
              <div class="card-body">
                <p>
                  <b>Description:</b> This was the capstone project of the
                  Fullstack Academy certification course. In this project, we
                  worked as a team to utilize the entirety of our accumulated
                  knowledge to create a website which we would use to sell a
                  product. My team decided to sell kittens. My role in this
                  project was mainly back-end development, setting up database
                  routes and connecting it to the front-end. I also implemented
                  functionality for the shopping cart feature of the website.
                </p>
                <p>August 2022</p>
                <p>
                  Created using JavaScript, React, Express, PostgreSQL, TailWind
                  CSS, and Prisma.
                </p>
                <div class="d-grid gap-2 d-md-block">
                  <a
                    class="btn btn-dark m-1"
                    href="https://github.com/Fullstack-Felines/grace_shopper"
                  >
                    GitHub
                  </a>
                  <a
                    class="btn btn-dark m-1"
                    href="https://fullstack-felines.herokuapp.com/?fbclid=IwAR3zEzFHi-wUCxhG1oVNXpX8qkgRwRQpD-lZ1bLvUrMQSMuxI2mXwP30NUc"
                  >
                    Live Site
                  </a>
                  <a
                    class="btn btn-dark m-1"
                    href="https://youtu.be/t3VBupIIbT4"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-sm-12 mb-3">
            <div class="card">
              <h3 class="card-title text-bg-dark p-2">
                Project Name: Intrepid Dreamer
              </h3>
              <div class="card-body">
                <p>
                  <b>Description:</b> This project is a personal project. I am
                  building a website where I can share stories that I've
                  written. People are able to create an account and log in if
                  they'd like to in order to leave comments or feedback. This
                  project is still in progress. I have completed most of the
                  backend and I will be using a CSS framework for styling.
                  <br />
                  <br />
                </p>
                <p>October 2022</p>
                <p>
                  Created using JavaScript, React, Express, PostgreSQL, Prisma
                </p>
                <div class="d-grid gap-2 d-md-block">
                  <a
                    class="btn btn-dark m-1"
                    href="https://github.com/SMan91/intrepid_dreamer"
                  >
                    GitHub
                  </a>
                  {/* <a href="">Live Site</a> */}
                  <span class="border m-1 p-1">
                    {" "}
                    Live Site not yet available.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-sm-12 mb-3">
            <div class="card">
              <h3 class="card-title text-bg-dark p-2">
                Project Name: Art Collector
              </h3>
              <div class="card-body">
                <p>
                  <b>Description:</b> The purpose of this project was to learn
                  to access and utilize remote APIs. The front-end was provided
                  for us, and we used Harvard University's Art API to create a
                  database of fine art.
                </p>
                <p>June 2022</p>
                <p>Created using Javascript, express, PostgreSQL</p>
                <div class="d-grid gap-2 d-md-block">
                  <a
                    class="btn btn-dark m-1"
                    href="https://github.com/SMan91/Art-Collector-Starter"
                  >
                    GitHub
                  </a>
                  <a
                    class="btn btn-dark m-1"
                    href="https://art-collector-f5c524.netlify.app/"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-sm-12 mb-3">
            <div class="card">
              <h3 class="card-title text-bg-dark p-2">Project Name: Qwirty</h3>
              <div class="card-body">
                <p>
                  <b>Description:</b> The purpose of this project was to use CSS
                  to create a replica of a fake store's product web page. We
                  were to emphasize mobile-first development with CSS. We had to
                  recreate the site from scratch using HTML and CSS.
                </p>
                <p>June 2022</p>
                <p>Created using HTML and CSS</p>

                <div class="d-grid gap-2 d-md-block">
                  <a
                    class="btn btn-dark m-1"
                    href="https://github.com/SMan91/Qwirty"
                  >
                    GitHub
                  </a>
                  <a
                    class="btn btn-dark m-1"
                    href="https://project02qwirty2206.netlify.app/"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-sm-12 mb-3">
            <div class="card">
              <h3 class="card-title text-bg-dark p-2">
                Project Name: Tic-Tac-Toe
              </h3>
              <div class="card-body">
                <p>
                  <b>Description:</b> Using JavaScript, HTML and CSS, we were to
                  create a browser game of tic-tac-toe. We created the entire
                  app, including design for the front-end.
                </p>
                <p>June 2022</p>
                <p>Created using JavaScript, HTML, and CSS</p>
                <div class="d-grid gap-2 d-md-block">
                  <a
                    class="btn btn-dark m-1"
                    href="https://github.com/SMan91/Tic-Tac-Toe/blob/main/index.html"
                  >
                    GitHub
                  </a>
                  <a
                    class="btn btn-dark m-1"
                    href="https://tic-tac-toe-f3caef.netlify.app/"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
      <div className="project_card">
        <h3>Project Name</h3>
        <p>Description</p>
        <p>Date Completed</p>
        <p>Languages Used</p>
        <a href="">GitHub</a>
        <a href="">Live Site</a>
      </div> */}
    </div>
  );
};

export default Portfolio;
