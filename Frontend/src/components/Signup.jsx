import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [isOpen, setIsOpen] = useState(false); // Control dialog visibility
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    //console.log("userInfo:", userInfo); // Check user info before sending

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        const { _id, fullname, email } = res.data.user;
        //console.log("API Response:", res.data.user); // Debug API response

        //console.log("User Info:");
        console.log("ID:", _id);
        console.log("Name:", fullname);
        console.log("Email:", email);

        toast.success("Signup Successful");
        navigate(from, { replace: true });

        // Save user info to local storage
        setTimeout(() => {
          window.location.reload();
          // Save user info to local storage
          const userToSave = { _id, fullname, email };
          //console.log("Saving to localStorage:", userInfo);
          localStorage.setItem("Users", JSON.stringify(userToSave));
        }, 1000);
        // console.log("Saving to localStorage:", userInfo);
        // localStorage.setItem("Users", JSON.stringify(userInfo));

        // // Confirm save
        // const savedData = localStorage.getItem("Users");
        // console.log(
        //   "Saved data in localStorage:",
        //   savedData ? JSON.parse(savedData) : null
        // );
      })
      .catch((err) => {
        if (err.response) {
          console.error("Error Response:", err.response);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

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
    <div className="flex h-screen items-center justify-center overflow-x-hidden">
      <div
        id="my_modal_4"
        className="
        bg-blue-100
        dark:bg-slate-800 
        p-5
        
        shadow-lg"
      >
        <div
          className="
        modal-box 
        dark:text-white
        dark:bg-slate-900 
        min-w-[500px]
        min-h-[400px]"
        >
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl">Sign Up</h3>

            {/*Name*/}

            <div className="mt-7 space-y-3">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="
            w-80
            px-3
            py-1
            border
            outline-none
            rounded-md
            dark:text-black
            "
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-lg text-red-500">
                  This field is required !
                </span>
              )}
            </div>

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
            outline-none
            rounded-md
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
            mt-10
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
                //onClick={() => setSubmit(true)}
              >
                Sign up
              </button>
              <p>Have Account?</p>
              <span>
                <button
                  className="
                  underline 
                  text-blue-500 
                  dark:text-blue-300 
                  cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

/*
useEffect(() => {
    console.log(email);
    console.log(password);
    //setSubmit(false);
  });

<input
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}

                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };*/

/**const onSubmit = async (data) => {
  const userInfo = {
    fullname: data.fullname,
    email: data.email,
    password: data.password,
  };

  console.log("userInfo:", userInfo); // Check user info before sending

  await axios
    .post("http://localhost:4001/user/signup", userInfo)
    .then((res) => {
      console.log("API Response:", res.data); // Debug API response

      if (res.data) {
        alert(res.data.message || "Signup Successful");
      }

      // Save user info to local storage
      console.log("Saving to localStorage:", userInfo);
      localStorage.setItem("Users", JSON.stringify(userInfo));

      // Confirm save
      const savedData = localStorage.getItem("Users");
      console.log("Saved data in localStorage:", savedData ? JSON.parse(savedData) : null);
    })
    .catch((err) => {
      if (err.response) {
        console.error("Error Response:", err.response);
        alert("Error: " + err.response.data.message);
      }
    });
};*/
