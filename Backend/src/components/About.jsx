import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import starry from "../../public/Starry_sky.jpg";

const About = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div className=" order-1 flex justify-center items-center">
        <img src={starry} className=" mt-5 md:mt-40 w-1/4" />
      </div>
      <Navbar />
      <div
        className="
        h-full
        md:px-40
        px-4 
        mt-20
        bg-white 
        text-black 
        dark:bg-black 
        dark:text-white 
        items-center 
        justify-center 
        text-center
        text-2xl  
        md:text-3xl"
      >
        <p>
          Welcome to STAR Industries Ltd., your gateway to a world of stories,
          knowledge, and adventure. We specialize in offering a wide selection
          of books in both digital and hardcopy formats, making it easy for
          readers to explore and enjoy their favorite genres from the comfort of
          their home. Whether you're looking for the latest bestsellers or
          timeless classics, our online bookstore is designed to cater to every
          reader's taste.
          <br />
          <br />
          <span className="dark:text-blue-300">
            At STAR Industries Ltd., we believe in the power of books to
            inspire, entertain, and enlighten.
          </span>
        </p>
        <br />
        <Link to="/">
          <button
            className=" 
            text-2xl
            border-[2px] 
            border-blue-300 
            text-blue-500 
            hover:bg-blue-300 
            hover:text-black 
            px-4 
            rounded-xl 
            mt-4
            dark:hover:bg-blue-300
            dark:text-white
            dark:hover:text-black"
          >
            Back to Home
          </button>
        </Link>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default About;
