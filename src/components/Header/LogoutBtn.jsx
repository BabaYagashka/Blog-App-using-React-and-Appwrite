import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="
      relative
      group
    px-5 py-2
    text-sm font-medium
    text-red-400
    rounded-lg
    transition-all duration-200
    hover:text-white
    hover:bg-red-500/20
    active:scale-95
    cursor-pointer
  "
      onClick={logoutHandler}
    >
      Logout
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-1/3 group-hover:left-[33%] rounded-full"></span>
    </button>
  );
}

export default LogoutBtn;
