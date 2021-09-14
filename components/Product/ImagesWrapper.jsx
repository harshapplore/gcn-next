import { useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
  const [activeImage, setActiveImage] = useState();

  useEffect(() => {
    if (!images || !images.length) return;

    setActiveImage(images[0]);
  }, [images]);

  console.log(images);

  return (
    <div className="product-image-wrapper">
      <div className="swiper swiper--product-big-img">
        <div className="swiper-mask">
          <img
            src={activeImage && activeImage.url}
            loading="lazy"
            width={745}
            height={559}
            sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 1279px) 58vw, 720px"
            alt="Handcrafted stuff"
            className="swiper-slide-img"
          />
        </div>
      </div>
      <div className="swiper swiper--product-small-imgs">
        <div className="swiper-mask">
          {images &&
            images.length > 0 &&
            images.map((image, index) => {
              return (
                <img
                  key={"image" + index}
                  src={image.url}
                  loading="lazy"
                  width={137}
                  height={103}
                  className="swiper-slide-img"
                  onClick={() => setActiveImage(image)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
