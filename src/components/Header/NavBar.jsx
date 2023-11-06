import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import arrow from "../../../public/Resources/arrow-forward.svg";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <div className="flex flex-col lg:flex-row gap-4 font-semibold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600  font-bold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/addbook"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 font-bold" : ""
          }
        >
          Add Book
        </NavLink>
        <NavLink
          to="/allbooks"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 font-bold" : ""
          }
        >
          All Books
        </NavLink>
        <NavLink
          to="/borrowedbooks"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 font-bold" : ""
          }
        >
          Borrowed Books
        </NavLink>
      </div>
    </>
  );

  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut();
    navigate("/");
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const html = document.documentElement;
    if (theme === "light") {
      html.setAttribute("data-theme", "dark");
      html.classList.remove("light");
      html.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
      html.classList.remove("dark");
      html.classList.add("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    // console.log("Previous Theme:", theme);
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme") || "light";
    setTheme(localStorageTheme);
    const html = document.documentElement;
    html.setAttribute("data-theme", localStorageTheme);
    html.classList.add(localStorageTheme);
    // console.log("Local Storage Theme:", localStorageTheme);
  }, []);

  return (
    <>
      <div className="navbar shadow-md z-50">
        <div className="container mx-auto font-bold">
          <div className="navbar-start flex justify-start">
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] py-2 shadow bg-base-50 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
          </div>
          <div className="navbar-center justify-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex flex-col gap-2 justify-end">
                <div className="flex justify-end items-center text-xs drop-shadow-2xl">
                  <img
                    className="mr-1 w-5 rounded-full border border-white"
                    src={user?.photoURL}
                  />
                  <span>{user?.displayName}</span>
                </div>
                <div
                  onClick={handleSignOut}
                  className="text-xs flex justify-end items-center gap-2 hover:text-red-700"
                >
                  <span>Log out</span>
                  <img src={arrow} className="bg-red-700 w-5 h-4" />
                </div>
              </div>
            ) : (
              <div className="flex justify-end items-center text-sm">
                <Link to="/login">
                  <p className=" hover:text-green-800">Login</p>
                </Link>
              </div>
            )}
          </div>
          {theme === "light" ? (
            <MdDarkMode
              onClick={toggleTheme}
              className="ml-2 rounded-full w-5 h-5 text-xs"
            ></MdDarkMode>
          ) : (
            <FiSun
              onClick={toggleTheme}
              className="ml-2 rounded-full w-5 h-5 text-xs"
            ></FiSun>
          )}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default NavBar;
