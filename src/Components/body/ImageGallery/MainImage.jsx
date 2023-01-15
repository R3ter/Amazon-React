import React from "react";
import ShareButton from "./ShareButton";
export default function MainImage({ setBigImageDis, image, setImagePos }) {
  return (
    <div
      onMouseMove={(e) => {
        setImagePos({ x: e.clientX, y: e.clientY });
      }}
      onMouseLeave={() => {
        setBigImageDis(false);
      }}
      onMouseEnter={() => {
        setBigImageDis(true);
      }}
      style={{ position: "relative" }}
    >
      <div
        style={{
          width: "560px",
          height: "560px",
          backgroundImage: "url(" + image + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <ShareButton />
    </div>
  );
}
