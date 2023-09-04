import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const images = [
    {
      url: "https://ph-live-01.slatic.net/p/3b8ce0f02bb922e892d09e2982aade7d.jpg",
    },
    {
      url: "https://i.ytimg.com/vi/Fg6NnHNCD4M/maxresdefault.jpg",
    },
    {
      url: "https://miro.medium.com/v2/resize:fit:1080/1*lccSklZypaQHVHs7tIvntQ.jpeg",
    },
    {
      url: "https://pbs.twimg.com/media/D_CJ2EOWwAAppk_.jpg",
    },
    {
      url: "https://img.paisawapas.com/ovz3vew9pw/2022/09/17111707/flipkart-bbd-sale-1.webp",
    },
    {
      url: "https://mobycashback.com/blog/wp-content/uploads/2022/04/appliances.jpg",
    },
    // { url: "images/7.jpg" },
  ];

  return (
    <>
      <SimpleImageSlider
        width={1240}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </>
  );
};

export default ImageSlider;