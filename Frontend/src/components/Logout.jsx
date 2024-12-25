import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  //we get user from hook
  const [authUser, setauthUser] = useAuth();
  const handleLogout = () => {
    try {
      //first change state of setauthUser to show null after logout
      setauthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successful");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error:" + error.message);
      setTimeout(() => {}, 3000);
    }
  };

  return (
    <div>
      <button
        className=" 
            border-[1px] 
            border-red-400 
            text-red-500 
            hover:bg-red-400 
            hover:text-black 
            px-3 
            rounded-xl
            duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
