import React, { useState } from "react";
import banner from "../../public/Banner.jpg";
import { useForm } from "react-hook-form";

function Banner() {
  const [isOpen, setIsOpen] = useState(false); // Control dialog visibility
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div
        className="
      max-w-screen-2x1 
      container 
      mx-auto 
      md:px-20 
      px-4 
      flex 
      flex-col 
      md:flex-row 
      my-20 
      dark:bg-black"
      >
        <div
          className=" 
        order-2 
        md:order-1 
        md:w-1/2 
        w-full 
        md:mt-22 
        mt-10"
        >
          <div className="space-y-7">
            <h1
              className="
            p-10 text-5xl 
            font-bold"
            >
              Welcome to BookStore, where the magic of words casts spells that
              transport you
              <span className="text-blue-300"> beyond the ordinary !</span>
            </h1>
            <p className="md:p-0 p-4">
              "Let the world melt away as you lose yourself in the pages, where
              time stands still and your mind roams free and the only limits are
              the edges of your imagination. In every word, you’ll find an
              unmatched serenity, a quiet escape where true freedom awaits."
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                className="
                 input 
                 input-bordered 
                 flex 
                 items-center 
                 gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-80 dark:text-black"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className=" text-black grow"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </label>
              <br/>
              <button
                type="submit"
                className="
                 border-[1px] 
                 border-blue-300 
                 text-blue-500 
                 hover:bg-blue-300 
                 hover:text-black 
                 px-3 
                 rounded-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className=" order-1 md:w-1/2 w-full ">
          <img src={banner} className=" mt-5 md:mt-10 p-10 w-30" />
        </div>
      </div>
    </>
  );
}

export default Banner;
