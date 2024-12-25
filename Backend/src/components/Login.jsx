import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false); // Control dialog visibility
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  /* Function to open modal
  const openModal = () => {
    modalRef.current?.showModal();
  };*/

  // Function to close modal
  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div
          className="
        modal-box 
        dark:bg-slate-800 
        dark:text-white"
        >
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">LOGIN</h3>

            {/*Email*/}

            <div className="mt-7 space-y-3">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="
            w-80
            px-3
            py-1
            border
            rounded-md
            outline-none
            dark:text-black
            "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-lg text-red-500">
                  This field is required !
                </span>
              )}
            </div>

            {/*Password*/}

            <div className="mt-5 space-y-3">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="
            w-80
            px-3
            py-1
            border
            rounded-md
            outline-none
            dark:text-black
            "
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-lg text-red-500">
                  This field is required !
                </span>
              )}
            </div>
            {/* Button */}
            <div
              className="
             flex
             justify-around
             mt-4
            "
            >
              <button
                type="submit"
                className="
            border-[1px] 
            border-blue-300 
            text-blue-500 
            hover:bg-blue-300 
            hover:text-black 
            px-3 
            rounded-xl
            duration-200"
              >
                Login
              </button>
              <span>
                Not registered?
                <Link
                  to="/signup"
                  className="underline text-blue-500 dark:text-blue-300 cursor-pointer"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
