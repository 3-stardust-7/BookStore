import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Help = () => {
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
    <div
      className='
        h-screen
        md:py-40
        px-4 
        bg-white 
        text-black 
        dark:bg-black 
        dark:text-white 
        items-center 
        justify-center 
        text-center
        text-2xl  
        md:text-3xl"'
    >
      <p>I'M SURE BOOKSTORE CAN OFFER YOU ALL KINDS OF HELP YOU NEED! </p>
      <br />
        <Link to="/">
          <button
            className=" 
            border-[2px] 
            border-blue-300 
            text-blue-500 
            hover:bg-blue-300 
            hover:text-black 
            px-4 
            rounded-2xl 
            mt-4
            dark:hover:bg-blue-300
            dark:text-white
            dark:hover:text-black"
          >
            Back to Home
          </button>
        </Link>
    </div>
  );
};

export default Help;
