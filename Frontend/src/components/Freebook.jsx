import React, { useState, useEffect } from "react";
//import list from "../../public/list.json";
//import { ListContext } from "./context/List";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => {
          return data.category === "Free";
        });
        setBook(data);
        console.log(data);
      } catch (error) {
        console.log("Error has occurred: ", error);
      }
    };
    getBook();
  }, []);
  //const [List, setList] = useContext(ListContext);
  //console.log(List);
  /*const filterData = List.filter((data) => {
    return data.category === "Free";
  });*/

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

  return (
    <>
      <div
        className="
      max-w-screen-2x1 
      container 
      mx-auto 
      md:px-20 
      px-4"
      >
        <div className="md:p-0 p-4">
          <h1 className="font-bold text-3xl pb-2">Free Offered Courses</h1>
          <p>
            From heartwarming romances to pulse-pounding thrillers, immerse
            yourself in tales that inspire, intrigue, and captivate. All
            available for free, just waiting for you!
          </p>
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
}

export default Freebook;
