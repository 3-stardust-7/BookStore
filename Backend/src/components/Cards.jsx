import React, { useEffect } from "react";

const Cards = ({ item }) => {
  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <>
      <div className="mt-7 my-7 md:p-4 p-10">
        <div
          className="
        bg-white 
        text-black 
        dark:bg-black 
        dark:text-white 
        border 
        card 
        bg-base-100 w-80  
        shadow-xl 
        hover:scale-105 
        duration-200"
        >
          <figure className="w-80">
            <img src={item.image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div
                className="
              badge 
              badge-outline 
              border-blue-300 
              text-blue-400"
              >
                {item.category}
              </div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div
                className="
              border-[1px] 
              border-blue-300 
              text-blue-500 
              px-2 
              py-1 
              rounded-3xl 
              hover:text-black
              hover:bg-blue-300
              hover:border-white
              duration-200
              cursor-pointer"
              >
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
