import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("Fetched Data:", res.data); // Log once for debugging
        setBook(res.data);
      } catch (error) {
        console.log("Error has occurred: ", error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full md:px-20 px-4 bg-white text-black dark:bg-black dark:text-white">
      <div className="mt-20 py-10 items-center justify-center text-center">
        <h1 className="text-2xl font-bold md:text-3xl">
          Your arrival lights up our space, and we can’t wait to
        </h1>
        <h1>
          <span className="text-blue-300 text-2xl font-bold md:text-4xl">
            create wonderful stories together!
          </span>
        </h1>
        <p className="mt-10">
          Step into a realm of endless possibilities through the power of
          reading. Whether it's fiction, non-fiction, or poetry,
          <br /> there's a story just waiting for you to uncover!
        </p>
        <Link to="/">
          <button className="border-[2px] border-blue-300 text-blue-500 hover:bg-blue-300 hover:text-black px-4 rounded-2xl mt-4 dark:hover:bg-blue-300 dark:text-white dark:hover:text-black">
            Back to Home
          </button>
        </Link>
      </div>
      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item._id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Course;




/**import React, { useContext, useEffect, useState } from "react";
//import { ListContext } from "./context/List";
import Cards from "./Cards";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Course = () => {
  //const [List, setList] = useContext(ListContext);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error has occured: ", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div
        className="
        w-full 
        h-full 
        md:px-20 
        px-4 
        bg-white 
        text-black 
        dark:bg-black 
        dark:text-white"
      >
        <div
          className="
        mt-20 
        py-10 
        items-center 
        justify-center 
        text-center"
        >
          <h1
            className="
          text-2xl 
          font-bold 
          md:text-3xl"
          >
            Your arrival lights up our space, and we can’t wait to
          </h1>
          <h1>
            <span
              className="
            text-blue-300 
            text-2xl 
            font-bold 
            md:text-4xl"
            >
              create wonderful stories together!
            </span>
          </h1>
          <p className="mt-10">
            Step into a realm of endless possibilities through the power of
            reading. Whether it's fiction, non-fiction, or poetry,
            <br /> there's a story just waiting for you to uncover!
          </p>
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
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Course;*/
