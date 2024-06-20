import React, { useState } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
            alt=""
          ></img>
          <span>Homepage</span>
          <span>Tv Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
          <span>Browse by Languages</span>
        </div>
        <div className="right">
          <SearchIcon className="icon"></SearchIcon>
          <span>Childrens</span>
          <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
          <img
            src="https://wellgroomedgentleman.com/wp-content/uploads/2023/10/tony-stark-beard.original.jpg"
            alt=""
          ></img>
          <ArrowDropDownIcon className="icon"></ArrowDropDownIcon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
