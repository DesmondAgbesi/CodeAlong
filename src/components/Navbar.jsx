import React from "react";
import { NavItem } from "./NavItem.";

export const Navbar = () => {
  return(
    <nav classname ="flex justify-between py- px-20 shadow-md">
      <h3 classname="font-bold ">Yorm</h3>
      <ul classname="flex gap-5">
        <NavItem menu="Home" />
        <NavItem menu="Products" />
        <NavItem menu="Services" />
        <NavItem menu="About" />
        <NavItem menu="Contact" />
      </ul>
    </nav>
  );
}