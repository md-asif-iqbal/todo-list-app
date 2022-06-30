import React from "react";
import img from '../../image/to-do.png'
const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-screen "
        style={{ backgroundImage: `url(${img})`}}
      >
        <div class="hero-overlay bg-opacity-40"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md ">
            <h1 class="mb-5 text-5xl font-bold">To-Do App</h1>
            <p class="mb-5">
              Welcome to To-Do App . Please Login first 
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
