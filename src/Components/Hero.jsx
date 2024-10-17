import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://www.linkedin.com/in/billy-bradocks/", "_blank")
          }
          className="linkedIn_btn"
        >
          LinkedIn
        </button>
      </nav>
      <h1 className='head_text'>
      Delivering the Essence of <br className='max-md:hidden' /> {/* hides the line break on medium screens and below */}
        <span className='linkedin_gradient '>Every Article</span>
      </h1>
      <h2 className='desc'>
      Streamline your reading experience with BrevityBot, an intuitive article summarizer that converts long texts into digestible insights
      </h2>
    </header>
  );
};

export default Hero;
