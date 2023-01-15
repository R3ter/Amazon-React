import React, { useState } from "react";
import MainImage from "./MainImage";
import SmallImage from "./SmallImage";
export default function ImageGallery({
  setBigImageDis,
  setBigImage,
  setImagePos,
}) {
  const images = [
    "https://m.media-amazon.com/images/I/612zDGeN+sL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/81ZnAYiX5sL._AC_SX569_.jpg",
    "https://m.media-amazon.com/images/I/71VLCNDupmL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/81oaBqvWAXS._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/71z8TgHJGDL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/71z8TgHJGDL._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/71RZ8Hj6JOL._AC_SY450_.jpg",
  ];
  const [imageSrc, setImage] = useState(images[0]);
  const setMainImage = (image) => {
    setImage(image);
    setBigImage(image);
  };
  return (
    <div style={{ display: "flex", marginTop: 20 }}>
      <div
        style={{
          margin: 30,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {images.map((image, index) => (
          <SmallImage
            image={image}
            setImage={setMainImage}
            hovered={imageSrc === image}
            key={index}
          />
        ))}
      </div>
      <MainImage
        setBigImageDis={setBigImageDis}
        setImagePos={setImagePos}
        image={imageSrc}
      />
    </div>
  );
}
