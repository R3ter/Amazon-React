import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Title from "./ItemInfo/Title";

export default function Body() {
  const [image, setImage] = React.useState(
    "https://m.media-amazon.com/images/I/612zDGeN+sL._AC_SY450_.jpg"
  );
  const [imagePos, setImagePos] = React.useState({ x: 0, y: 0 });
  const [bigImage, setBigImage] = React.useState(false);
  console.log(imagePos);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          maxWidth: "1500px",
        }}
      >
        <ImageGallery
          setImagePos={setImagePos}
          setBigImageDis={setBigImage}
          setBigImage={setImage}
        />
        <div>
          <div
            style={{
              display: bigImage ? "block" : "none",
              margin: 10,
              marginTop: 40,
              width: "49%",
              height: "75vh",
              backgroundColor: "black",
              position: "absolute",
              zIndex: 100,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              resize: "both",
              backgroundPosition: `${Math.abs(imagePos.x)}px ${imagePos.y}px`,
            }}
          ></div>
          <Title />
        </div>
      </div>
    </div>
  );
}
