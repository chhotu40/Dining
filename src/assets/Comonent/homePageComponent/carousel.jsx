import React from "react";
import { carousleDetail, carousleImage } from "../../Utils";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ important for functionality

export default function ImageCarousel() {
  const images = [
    carousleImage.image1,
    carousleImage.image2,
    carousleImage.image3,
    carousleImage.image4,
    carousleImage.image5,
    carousleImage.image6,
    carousleImage.image7,
  ];

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide bg-black"
      data-bs-ride="carousel"
      data-bs-interval="3000" // optional auto-slide speed
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              className="d-block w-100"
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ height: "450px", objectFit: "contain" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{carousleDetail[index]?.header}</h5>
              <p>{carousleDetail[index]?.describe}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon text-black" aria-hidden="true"></span>
        <span className="visually-hidden ">Previous</span>
      </button>

      {/* Next button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
