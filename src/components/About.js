import React from "react";

export default function About() {
  return (
      <div class="container text-center">
        <div class="row">
        <div class="col">
          <img class="container"
            src="https://i.imgur.com/pF6nHXr.jpeg"
          />
        </div>
        <div class="col">
          <h1>
            Hey, I'm Olivia.
            <br/>Welcome to my Portfolio.
          </h1>
            <a
              href="#contact">
              Work With Me
            </a>
            <a
              href="#projects"
              >
              View my past work.
            </a>
          </div>
        </div>
      </div>
  );
}