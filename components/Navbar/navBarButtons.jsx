import React, { Component } from "react";

const NavBarButtons = (props) => {
  return (
    <li className="nav-item">
      <a className=" btn btn-outline-light nav-link  text-primary mx-1">
        {props.btnname}
      </a>
    </li>
  );
};

export default NavBarButtons;
