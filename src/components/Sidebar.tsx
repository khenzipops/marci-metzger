"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faContactCard,
  faPeopleGroup,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menu1 = ["LISTINGS", "LET'S MOVE", "ABOUT US"];
  const icons = [faList, faContactCard, faPeopleGroup];

  return (
    <div>
      {/* Hamburger Icon */}
      <button
        onClick={toggleDrawer(true)}
        className="p-3 text-gray-800 text-2xl hover:text-black"
        aria-label="Open Menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0  z-40"
          onClick={toggleDrawer(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 ">Home</h2>
          <button onClick={toggleDrawer(false)} aria-label="Close Menu">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-xl text-gray-500 hover:text-gray-800"
            />
          </button>
        </div>

        {/* Drawer Menu */}
        <ul className="border-b border-gray-200 text-gray-600">
          {menu1.map((text, index) => (
            <li
              key={text}
              className="flex items-center px-4 py-4 hover:text-gray-800 cursor-pointer "
            >
              <FontAwesomeIcon
                icon={icons[index]}
                className="mr-3 text-gray-800"
              />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
