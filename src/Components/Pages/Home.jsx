import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider";
import NewArrival from "./NewArrival";

const Home = () => {
  return (
    <>
      <div className="Carousel-container">
        <ImageSlider />
      </div>
      <div className="Gender-Container">
        <div className="gender-inner-container">
          <img
            src="https://1847884116.rsc.cdn77.org/tamil/news/viratkohli-2322022t-b49.jpg"
            alt="men_img"
          />
          <Link to="/men" className="men-legend">
            MEN
          </Link>
        </div>
        <div className="gender-inner-container">
          <img
            src="https://bollywoodgaram.com/wp-content/uploads/2018/01/Anushka-Sharma-shoot-3.jpg"
            alt="Women_img"
          />

          <Link to="/women" className="women-legend">
            WOMEN
          </Link>
        </div>
        <div className="gender-inner-container">
          <img
            src="https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ= "
            alt="access_img"
          />
          <Link to="/electronics" className="access-legend">
            ELECTRONIC
          </Link>
        </div>
      </div>
      <div className="newArrival-container">
        <NewArrival />
      </div>
    </>
  );
};

export default Home;