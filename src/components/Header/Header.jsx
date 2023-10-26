import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/download.png"
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      {/* Logo link */}
      <Link to="/">
        <div className="logo">Movie app</div>
      </Link>

      <div className="userImg">
        <img src={user} alt="userImg" />
      </div>
    </div>
  );
};

export default Header;
