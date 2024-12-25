import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  {
    /**useRef directly interacts with the DOM element (dialog) to control opening and closing.
    No need for re-renders as useRef doesn’t trigger a state update like useState does. */
  }
  const modalRef = useRef(null);
  //const [isOpen, setIsOpen] = useState(false);
  // Control dialog visibility
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    console.log("userInfo:", userInfo); // Check user info before sending

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        const { _id, fullname, email } = res.data.user; // Extract data from response
        //console.log("API Response:", res.data); // Debug API response

        console.log("User Info:");
        console.log("ID:", _id);
        console.log("Name:", fullname);
        console.log("Email:", email);

        //if (res.data) {
        toast.success(res.data.message || "Login Successful");
        //}
        setTimeout(() => {
          window.location.reload();
          // Save user info to local storage
          const userToSave = { _id, fullname, email };
          //console.log("Saving to localStorage:", userInfo);
          localStorage.setItem("Users", JSON.stringify(userToSave));
        }, 1000);

        // Confirm save
        //const savedData = localStorage.getItem("Users");
        // console.log(
        //   "Saved data in localStorage:",
        //   savedData ? JSON.parse(savedData) : null
        // );
      })
      .catch((err) => {
        if (err.response) {
          console.error("Error Response:", err.response);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  /* Function to open modal
  const openModal = () => {
    modalRef.current?.showModal();
  };*/

  // Function to close modal
  // const closeModal = () => {
  //   modalRef.current?.close();
  // };
  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
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
