import React from "react";
import { FaPinterest } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

const NavbarIcons = () => {
  return (
    <div className="flex flex-col">
      <div className="upper">
        <div className="icon-styling mb-8" title="Home">
          <FaPinterest className="text-emerald-700" />
        </div>

        <div className="icon-styling" title="Home">
          <FiHome />
        </div>

        <div className="icon-styling" title="Explore">
          <FiCompass />
        </div>

        <div className="icon-styling" title="Create">
          <IoMdAddCircleOutline />
        </div>

        <div className="icon-styling" title="Updates">
          <FiBell />
        </div>

        <div className="icon-styling" title="Messages">
          <FiMessageSquare />
        </div>
      </div>
      <div className="lower absolute bottom-2">
        <div className="icon-styling" title="Settings">
          <FiSettings />
        </div>
      </div>
    </div>
  );
};

export default NavbarIcons;
