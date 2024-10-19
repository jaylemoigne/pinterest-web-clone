import React from "react";
import { MdCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Filters {
  title: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  bgColour: string;
  hoverColour: string;
}

const HorizontalNavBar = () => {
  const filters: Filters[] = [
    {
      title: "wilderness",
      imageOne: "https://picsum.photos/40/60",
      imageTwo: "https://picsum.photos/40/60",
      imageThree: "https://picsum.photos/40/60",
      bgColour: "#D6E8D3", // Light Green
      hoverColour: "#B8D3A0", // Soft Olive
    },
    {
      title: "ocean depths",
      imageOne: "https://picsum.photos/40/60",
      imageTwo: "https://picsum.photos/40/60",
      imageThree: "https://picsum.photos/40/60",
      bgColour: "#A3C4E0", // Light Blue
      hoverColour: "#6DA9D9", // Ocean Blue
    },
    {
      title: "mountain peaks",
      imageOne: "https://picsum.photos/40/60",
      imageTwo: "https://picsum.photos/40/60",
      imageThree: "https://picsum.photos/40/60",
      bgColour: "#E0D4B9", // Sand
      hoverColour: "#C5B69D", // Khaki
    },
    {
      title: "forest trails",
      imageOne: "https://picsum.photos/40/60",
      imageTwo: "https://picsum.photos/40/60",
      imageThree: "https://picsum.photos/40/60",
      bgColour: "#A8D8B9", // Pale Green
      hoverColour: "#6ABF9C", // Forest Green
    },
    {
      title: "desert sun",
      imageOne: "https://picsum.photos/40/60",
      imageTwo: "https://picsum.photos/40/60",
      imageThree: "https://picsum.photos/40/60",
      bgColour: "#F5E6B2", // Light Sand
      hoverColour: "#D6B94D", // Golden Sand
    },
    {
      title: "rustic charm",
      imageOne: "https://picsum.photos/40/60",
      imageTwo: "https://picsum.photos/40/60",
      imageThree: "https://picsum.photos/40/60",
      bgColour: "#D4C2B0", // Soft Brown
      hoverColour: "#A36D5D", // Terracotta
    },
    {
      title: "countryside",
      imageOne: "https://picsum.photos/40/60",
      imageTwo: "https://picsum.photos/40/60",
      imageThree: "https://picsum.photos/40/60",
      bgColour: "#E5E1D3", // Cream
      hoverColour: "#C4BBA0", // Warm Beige
    },
    {
      title: "autumn leaves",
      imageOne: "https://picsum.photos/40/60",
      imageTwo: "https://picsum.photos/40/60",
      imageThree: "https://picsum.photos/40/60",
      bgColour: "#F9D5B5", // Light Orange
      hoverColour: "#C77C3C", // Burnt Orange
    },
    {
      title: "earthy tones",
      imageOne: "https://picsum.photos/40/60",
      imageTwo: "https://picsum.photos/40/60",
      imageThree: "https://picsum.photos/40/60",
      bgColour: "#C7B29D", // Dusty Beige
      hoverColour: "#8A6A54", // Dark Brown
    },
    {
      title: "natural wonders",
      imageOne: "https://picsum.photos/40/60",
      imageTwo: "https://picsum.photos/40/60",
      imageThree: "https://picsum.photos/40/60",
      bgColour: "#EAE8E0", // Soft Gray
      hoverColour: "#B5B3A1", // Moss Gray
    },
  ];

  return (
    <div className="nav-wrapper fixed top-0 left-20 w-full pt-3 pl-6">
      <div className="flex flex-col">
        <div className="upper-wrap flex flex-row items-center">
          {/* Search bar */}
          <div className="search relative w-[90%] flex-shrink">
            <FiSearch className="search-icon absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="p-[0.65rem] pl-10 rounded-lg w-full bg-gray-100 hover:bg-gray-200 "
            />
            <MdCancel className="cancel-icon absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>

          {/* Profile section */}
          <div className="profile-container flex items-center  p-4">
            {/* Profile icon */}
            <div className="hover:bg-gray-100 rounded-lg">
              <MdAccountCircle className="profile-icon text-5xl p-2 text-gray-600 cursor-pointer " />
            </div>

            {/* Dropdown icon */}
            <div className="hover:bg-gray-100 rounded-full">
              <RiArrowDropDownLine className="dropdown-icon text-3xl text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="lower-wrap w-full mt-4">
          <div className="filters flex flex-row gap-4 overflow-x-auto">
            {filters.map((filter, index) => (
              <div
                key={index}
                className="filter-card rounded-cm flex flex-row w-[20rem] h-[6.5rem] p-4 gap-4 cursor-pointer flex-shrink-0"
                style={{
                  backgroundColor: filter.bgColour,
                  transition: "background-color 0.3s ease", // Smooth transition
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = filter.hoverColour)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = filter.bgColour)
                }
              >
                <div className="images w-1/3 relative">
                  <img
                    src={filter.imageOne}
                    alt="photo"
                    className="rotate-left rounded-lg absolute left-2 border-white border-2"
                  />
                  <img
                    src={filter.imageTwo}
                    alt="photo"
                    className="rounded-lg absolute left-8 z-10 border-white border-2 bottom-0.5"
                  />
                  <img
                    src={filter.imageThree}
                    alt="photo"
                    className="rotate-right rounded-lg absolute left-14 border-white border-2"
                  />
                </div>
                <div className="caption w-2/3 text-center mt-2 mr-4">
                  <p className="text-sm ">More ideas for</p>
                  <h3 className="font-semibold text-xl line-height-2">
                    {filter.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNavBar;
