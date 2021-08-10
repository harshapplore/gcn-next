import image from "next/image";
import { useState, useEffect } from "react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import { Swiper, SwiperSlide } from "swiper/react";

// const Slider = ({ images }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="slider-container">
//       <div className="main-image">
//         {images && images.length > 0 && (
//           <img
//             src={images[activeIndex].url || ""}
//             alt={images[activeIndex].name}
//           />
//         )}
//       </div>

//       <div className="thumbnails">
//         {images &&
//           images.length > 0 &&
//           images.map((image, index) => (
//             <img
//               key={image.name}
//               width={150}
//               src={image.url || ""}
//               alt={image.name}
//               onClick={() => setActiveIndex(index)}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

const Slider = ({ images }) => {
  const [img, setImages] = useState([]);

  useEffect(() => {
    const SliderList =
      images &&
      images.length > 0 &&
      images.map((img, index) => (
        <SwiperSlide key={"img" + index}>
          <img className="slider-image" src={img.url} alt={img.name} />
        </SwiperSlide>
      ));

    setImages(SliderList);
  }, [images]);

  return (
    <Swiper
      id="slider-main"
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {img}
    </Swiper>
  ); 
};

export default Slider;
