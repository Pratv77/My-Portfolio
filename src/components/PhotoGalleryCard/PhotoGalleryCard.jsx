import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import info from "../../assets/info.png";

import img1 from "../../assets/PhotoGallery/20180630_151754_HDR.jpg";
import img2 from "../../assets/PhotoGallery/20180704_165440.jpg";
import img3 from "../../assets/PhotoGallery/IMG_20190628_172850.jpg";
import img4 from "../../assets/PhotoGallery/IMG_20190628_201808.jpg";

const PhotoGalleryCard = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="h-full rounded-lg">
      <div className="max-w-[686px] mx-auto">
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          className="relative rounded-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="select-none">
              <img
                src={img}
                alt={`image-${index}`}
                className="h-[29rem] w-full object-cover rounded-lg"
              />
              <button className="absolute bottom-4 right-4 p-2 rounded-full hover:opacity-70 transition ease-in-out">
                <img src={info} alt="Info icon" className="h-12 w-12" />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoGalleryCard;
