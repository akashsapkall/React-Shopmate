import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate} from "react-router-dom";
// import { useCart } from "../context/CartContext";
import { useSelector } from "react-redux";
export const Header = () => {
    // const cartContext=useCart();
    const cart =useSelector((state)=>state.cart.cartList);
    const [darkMode, setDarkMode]=useState(JSON.parse(localStorage.getItem("darkMoade"))||true);
    const navigate=useNavigate();
    useEffect(()=>{
        localStorage.setItem("darkMode",JSON.stringify(darkMode));
        if(darkMode){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[darkMode]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const query=e.target.search.value;
        e.target.reset();
        return navigate(`/search?q=${query}`);
    }
    const activeclass="font-semibold text-blue-400";
    const inactiveclass="";
  return (
    <>
      <nav className="text-gray-700">
        <div className="h-16 text-gray-700 text-xl flex justify-around items-center border-b bordet-slate-900 dark:bg-gray-900 dark:text-white">
          <Link to="/" className="flex items-center space-x-3">
            <img src="" alt="logo" className="" />
            <span className="self-center text-2xl font-semibold">Shopmate</span>
          </Link>
          <div className="flex items-center space-x-11">
            <span>
              <NavLink to="/" className={({isActive})=>isActive?activeclass:inactiveclass}>Home</NavLink>
            </span>
            <span>
              <NavLink to="/cart" className={({isActive})=>isActive?activeclass:inactiveclass}>Cart</NavLink>
            </span>
          </div>
          <div className="w-80 flex justify-between items-center">
          <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input
                  type="text"
                  id="search-navbar"
                  name="search"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </form>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              // border border-slate-300 dark:border-slate-600
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mx-1"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-500 hover:text-gray-700 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:ring-gray-600"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-500 hover:text-gray-700 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:ring-gray-600"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" />
                </svg>
              )}
            </button>
            <span>cart:{cart.length}</span>
          </div>
        </div>
      </nav>
    </>
  );
};
