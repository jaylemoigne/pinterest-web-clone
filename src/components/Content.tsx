import React from "react";

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
      <div className="content-container bg-white absolute left-20 top-60 p-4 columns-[240px]">
        {images.map((image, index) => (
          <div key={index} className="image-item mb-4 mr-2">
            <img
              src={image}
              alt={`Placeholder ${index}`}
              loading="lazy"
              className="rounded-cm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
