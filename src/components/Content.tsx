import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiShare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const Content = () => {
  const images = [
    "images/image (1).jpg",
    "images/image (2).jpg",
    "images/image (3).jpg",
    "images/image (4).jpg",
    "images/image (5).jpg",
    "images/image (6).jpg",
    "images/image (7).jpg",
    "images/image (8).jpg",
    "images/image (9).jpg",
    "images/image (10).jpg",
    "images/image (11).jpg",
    "images/image (12).jpg",
    "images/image (13).jpg",
    "images/image (14).jpg",
    "images/image (15).jpg",
    "images/image (16).jpg",
    "images/image (17).jpg",
    "images/image (18).jpg",
    "images/image (19).jpg",
    "images/image (20).jpg",
    "images/image (21).jpg",
    "images/image (22).jpg",
    "images/image (23).jpg",
  ];

  return (
    <div>
      <div className="content-container bg-white absolute left-20 top-60 p-4 columns-[340px] gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-card mb-4 break-inside-avoid cursor-pointer"
          >
            <div className="relative group">
              <img
                src={image}
                alt={`Placeholder ${index}`}
                loading="lazy"
                className="rounded-cm w-full h-auto transition-opacity duration-300 ease-in-out"
              />
              <div className="overlay absolute inset-0 bg-black bg-opacity-60 opacity-0 flex flex-col justify-between text-white rounded-cm transition-opacity duration-300 ease-in-out group-hover:opacity-100 p-4">
                <div className="top-overlay flex justify-between">
                  <h3 className="text-[16px] font-bold flex items-center hover:bg-black hover:bg-opacity-10 rounded-full p-2 cursor-pointer">
                    Profile <RiArrowDropDownLine className="ml-1" />
                  </h3>
                  <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1 rounded-full font-semibold cursor-pointer">
                    Save
                  </button>
                </div>
                <div className="lower-overlay flex justify-end gap-2">
                  <button className="bg-white hover:bg-gray-200 text-black p-2 rounded-full cursor-pointer">
                    <FiShare />
                  </button>
                  <button className="bg-white hover:bg-gray-200 text-black p-2 rounded-full cursor-pointer">
                    <BsThreeDots />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
